import "./filter.css"

export function Filter(props) { 

    return ( 
        <nav className = "filter" >
            <input value={props.dateFrom} onChange={props.handlerDateFrom} className="filter-box" type ="date" />
            <input value={props.dateTo} onChange={props.handlerDateTo} className="filter-box"  type ="date" />
            <select value={props.country} onChange={props.handlerCountry} className="filter-box" name="country" >
                <option value = "all" > Todos los países </option> 
                <option value = "Argentina" > Argentina </option> 
                <option value = "Brasil" > Brasil </option> 
                <option value = "Chile" > Chile </option> 
                <option value = "Uruguay" > Uruguay </option> 
            </select> 
            <select value={props.price} onChange={props.handlerPrice} className="filter-box" name="price">
                <option value = "all" > Cualquier precio </option> 
                <option value = "1" > $ </option> 
                <option value = "2" > $$ </option> 
                <option value = "3" > $$$ </option> 
                <option value = "4" > $$$$ </option> 
            </select> 
            <select value={props.size} onChange={props.handlerSize} className="filter-box" name="rooms">
                <option value = "all" > Cualquier tamaño </option> 
                <option value = "Chico" > Chico </option> 
                <option value = "Mediano" > Mediano </option> 
                <option value = "Grande" > Grande </option> 
            </select> 
        </nav>
    )
}