import { useContext} from 'react';
import {CartContext} from './../../contexts/CartContext'
import CartBlock from '../../components/CartBlock';
import './style.css'
function Cart(){
  const {items,clearCart} = useContext(CartContext)!

  function clickHandle(){
    clearCart()
  }
  return(
    <div>
      <div className='cartSection'>
      {items.map((item, index) => (
        <CartBlock 
          key={index}
          title={item.title} 
          price={item.price}
          id={item.id}
        />
        ))}
    </div>
    <button onClick={clickHandle}>Очистить корзину</button>
    </div>
  )
}

export default Cart