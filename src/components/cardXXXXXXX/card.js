import "./card.css"
import { Description } from "../descriptionXXXXXX/description"
import { Price } from "../btnPrice/btnPrice"


export function Card(props){

    const reserve = () =>{
        alert(`Has reservado el Hotel "${props.name}"`);
    }

    return(
        <section className="card">
            <img className="image" src={props.photo} alt="hotel" />
            <h2 className="font-roboto">{props.name}</h2>
            <p className="font-roboto description">{props.description}</p>
            
            <div className="description">
                <Description
                image= "./images/location.svg"
                description={`${props.city}, ${props.country}`}
                />
                <div className="flex-row width100">
                    <Description
                    image="./images/room.svg"
                    description={`${props.rooms} habitaciones`}
                    />
                    <Price price={props.price}/>
                </div>
            </div>

            <button onClick={reserve} className="btn-book font-roboto">Reservar</button>
        </section>
    )
}