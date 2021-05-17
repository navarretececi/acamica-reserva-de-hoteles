import "./btnReset.css"

export function Reset(props) {

    return ( 
        <div className="container-btn-reset">
            <input className="btn-reset" onClick={props.handlerReset} type="button" value="Limpiar filtros"/>
        </div>
    )
}
