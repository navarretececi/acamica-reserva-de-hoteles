import './header.css';
import { Description } from "../description/description"
import { Price } from "../btnPrice/btnPrice"

export function Header(props){


return (
    <header className="header">
        <h1 className="principal-title font-roboto">Hoteles</h1>
        
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