import { useContext } from 'react';
import { CartContext, type Product } from './../../contexts/CartContext'
import './style.css'

function CartBlock(props: Product){
    const {removeItem} = useContext(CartContext)!

    function clickHandle(){
        removeItem(props.id)
    }
    return(
        <div className="cartBlock">
            <img src="./кабуто.jpg" className="clothes_block_img"></img>
            <span>{props.title}</span>
            <span>{props.price} ₽</span>
            <button onClick={clickHandle}>Удалить</button>
        </div>
    )
}

export default CartBlock