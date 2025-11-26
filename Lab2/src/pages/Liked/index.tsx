import LikedBlock from "../../components/LikedBlock"
import { useContext } from "react"
import { LikedContext } from "../../contexts/LikedContext" 
import './style.css'
function Liked(){
    const {likes} = useContext(LikedContext)!
    return(
   <div className="likedSection">
    {likes.map((item, index) => (
        <LikedBlock
            key={index}
            title={item.title} 
            price={item.price}
            id={item.id}
            />
            ))}
        </div>
    )
}

export default Liked