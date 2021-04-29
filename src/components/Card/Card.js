import "./Card.css"
import { Description } from "../Description/Description"


export function Card(props){
    return(
        <div className="Card">
            <img className="image" src= {props.photo} alt="hotel" />
            <h2 className="font-roboto">{props.name}</h2>
            <p className="font-roboto description">{props.description}</p>
            <Description/>
            <button className="btn-book font-roboto">Reservar</button>
        </div>
    )
}