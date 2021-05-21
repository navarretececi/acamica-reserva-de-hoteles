import './header.css';
import { Description } from "../descriptionXXXXXX/description"
import { Price } from "../btnPrice/btnPrice"
import { Reset } from "../btnResetXXXXXX/btnReset"

export function Header(props){

    function naturalDate(date) {
        let d = new Date(date + " 00:00"),
            month = d.getMonth(),
            day = d.getDate(),
            year = d.getFullYear();
    
        if (month === 0) {
            month = "Enero"
        } else if (month === 1){
            month =  "Febrero"
        } else if (month === 2){
            month = "Marzo"
        } else if (month === 3){
            month = "Abril"
        } else if (month === 4){
            month = "Mayo"
        } else if (month === 5){
            month = "Junio"
        } else if (month === 6){
            month = "Julio"
        } else if (month === 7){
            month = "Agosto"
        } else if (month === 8){
            month = "Septiembre"
        } else if (month === 9){
            month = "Octubre"
        } else if (month === 10){
            month = "Noviembre"
        } else  month = "Diciembre"
    
        return  `${day} de ${month} del ${year}`   
    }

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
        desde el ${!props.dateFrom ? "___" : naturalDate(props.dateFrom)} 
        hasta el ${!props.dateTo ? "___" : naturalDate(props.dateTo)} 
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

