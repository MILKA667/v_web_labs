import "./style.css"
import {CartContext, type Product} from './../../contexts/CartContext'
import { LikedContext } from '../../contexts/LikedContext'
import {useContext} from 'react';

export default function ClothesBlock(props: Product){
    const {addItem} = useContext(CartContext)!
    const {addToLiked} = useContext(LikedContext)!
    function clickHandle(){
        addItem(props)
    }
    function heartIconClickHandle(){
        addToLiked(props)
    }
    return(
        <div className="clothes_block">
            <img src="./кабуто.jpg" className="clothes_block_img"></img>
            <img onClick={heartIconClickHandle} src='./heart.svg'></img>
            <span>{props.title}</span>
            <span>{props.price} ₽</span>
            <button id={props.id} onClick={clickHandle}>Добавить в корзину</button>
        </div>
    )
}