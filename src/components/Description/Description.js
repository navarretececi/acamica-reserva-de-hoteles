import "./description.css"

export function Description(props){
    return(
        <div className="description">
            <div className="flex-row">
                <div className="container-svg">
                    <img className="svg" src="./images/location.svg" alt="ubicacion" />
                </div>
                <h4 className="detail">{props.city}, {" "} {props.country}</h4>
            </div>
            <div className="flex-row">
                <div className="flex-row">
                    <div className="container-svg">
                        <img className="svg" src="./images/room.svg" alt="habitaciones" />
                    </div>
                    <h4 className="detail">{props.rooms} Habitaciones</h4>
                </div>
                <div className="container-svg container-price">
                    <img className="svg" src="./images/dollar.svg" alt="precio" />
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}