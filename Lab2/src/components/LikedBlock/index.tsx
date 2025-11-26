import { useContext } from 'react';
import { LikedContext} from '../../contexts/LikedContext';
import './style.css'
import type { Product } from '../../contexts/CartContext';

function LikedBlock(props: Product){
    const {addToLiked} = useContext(LikedContext)!

    function clickHandle(){
        addToLiked(props)
    }
    return(
        <div className='likedBlock'>
            <img src="./кабуто.jpg" className="clothes_block_img"></img>
            <span>{props.title}</span>
            <span>{props.price} ₽</span>
            <button onClick={clickHandle}>Удалить</button>
        </div>
    )
}

export default LikedBlock