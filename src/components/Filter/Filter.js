import "./Filter.css"

export function Filter() {
    return ( 
        <div className = "filter" >
            <input className="filter-box" type = "date" / >
            <input className="filter-box"  type = "date" / >
            <select className="filter-box" name="country" >
                <option value = "all" > Todos los países </option> 
                <option value = "ar" > Argentina </option> 
                <option value = "br" > Brasil </option> 
                <option value = "ch" > Chile </option> 
                <option value = "ur" > Uruguay </option> 
            </select> 
            <select className="filter-box" name="price">
                <option value = "all" > Cualquier precio </option> 
                <option value = "1" > $ </option> 
                <option value = "2" > $$ </option> 
                <option value = "3" > $$$ </option> 
                <option value = "4" > $$$$ </option> 
            </select> 
            <select className="filter-box" name="rooms">
                <option value = "all" > Cualquier tamaño </option> 
                <option value = "1" > Chico </option> 
                <option value = "2" > Mediano </option> 
                <option value = "3" > Gramde </option> 
            </select> 
        </div>
    )
}