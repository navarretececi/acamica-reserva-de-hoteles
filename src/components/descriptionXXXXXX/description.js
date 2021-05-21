import "./description.css"

export function Description(props){
    return(
        <div className="flex-row padding-left-3">
            <div className="container-svg">
                <img className="svg" src={props.image} alt="imagen" />
            </div>
            <h4 className="detail">{props.description}</h4>
        </div>
    );
}