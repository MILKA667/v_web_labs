import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "./CartContext";



interface LikedContextValue {
  likes: Product[];
  addToLiked: (product: Product) => void;
  clearLiked: () => void;
}

export const LikedContext = createContext<LikedContextValue | undefined>(undefined);

export const LikedProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<Product[]>([]);


  const addToLiked = (product: Product) => {
    setLikes(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      return exists
        ? prevItems.filter(item => item.id !== product.id) 
        : [...prevItems, product]; 
    });
  };

  const clearLiked = () => setLikes([]);

  const value: LikedContextValue = {
    likes,
    addToLiked,
    clearLiked,
  };

  return (
    <LikedContext.Provider value={value}>
      {children}
    </LikedContext.Provider>
  );
};
