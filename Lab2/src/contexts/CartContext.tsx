import { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface Product {
  id: string;
  title: string;
  price: string;
}


export interface CartItem extends Product {
  quantity: number;
}


interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number | string) => void;
  clearCart: () => void;
}


export const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId: number | string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => setItems([]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
