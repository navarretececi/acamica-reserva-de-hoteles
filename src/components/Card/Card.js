import "./card.css"
import { Description } from "../description/description"


export function Card(props){

    const reserve = () =>{
        alert(`Has reservado el Hotel "${props.name}"`);
    }

    return(
        <section className="card">
            <img className="image" src={props.photo} alt="hotel" />
            <h2 className="font-roboto">{props.name}</h2>
            <p className="font-roboto description">{props.description}</p>
            <Description
            rooms= {props.rooms}
            city={props.city}
            country={props.country}
            price={props.price}
            />
            <button onClick={reserve} className="btn-book font-roboto">Reservar</button>
        </section>
    )
}

