import ClothesBlock from "../ClothesBlock/index"
import {data} from '../../data'
import "./style.css"

interface ClothesSectionProps {
  ClothesName: string;
}

export default function ClothesSection(props: ClothesSectionProps){
    const filteredData = data.filter(item => item.category === props.ClothesName);
    
    return(
        <div>
            <h1>{props.ClothesName}</h1>
            <div className="clothes-section">
            {filteredData.map((item, index) => (
                <ClothesBlock 
                    key={index}
                    title={item.name} 
                    price={item.price}
                    id={item.id}
                />
            ))}
            </div>
        </div>    
    )
}