import './header.css';
import { Description } from "../description/description"
import { Price } from "../btnPrice/btnPrice"
import { Reset } from "../btnReset/btnReset"

export function Header(props){

return (
    <header className="header">
        <div className="flex-row">
            <h1 className="principal-title font-roboto">Hoteles</h1>
            <Reset 
            handlerReset={props.handlerReset}
            />
        </div>
        <h2 className="font-roboto detail-header">{`Búsqueda para hoteles: 
        ${props.size === "all" ? "cualquier tamaño" : props.size}, 
        de precio ${props.price === "all" ? "indefinido" : `nivel: ${props.price}`}, 
        desde el ${!props.dateFrom ? "___" : props.dateFrom} 
        hasta el ${!props.dateTo ? "___" : props.dateTo} 
        en ${props.country === "all" ? "todos los países" : props.country}`}</h2>
        
        <div className="flex-row container-description">
        {props.dateFrom ? <Description
                            image= "./images/calendar.svg"
                                        description={`Desde el día: ${props.dateFrom}`}
                            /> : ""}
        {props.dateTo ? <Description
                            image= "./images/calendar.svg"
                            description={`Hasta el día: ${props.dateTo}`}
                        /> : ""}
        </div>  
        <div className="flex-row container-description">          
        {props.country === "all" ? "" :
                                        props.country ? 
                                        <Description
                                        image= "./images/location.svg"
                                        description={props.country}
                                        /> : ""}
        
        {props.price === "all" ? "" :
                                    props.price ?
                                    <Price price={props.price}/> : ""}

        {props.size === "all" ? "" :                           
                                    props.size ?
                                    <Description
                                    image="./images/room.svg"
                                    description={props.size}
                                    /> : ""}
        </div>
        
    </header>
)
}

