import "./btnPrice.css"

export function Price(props){
    return(
        <div className="container-svg container-price">
            { 
                (()=> {
                    let p = []
                    for (let i = 1; i < 5; i++){
                            (i<= props.price ? 
                                p.push(<i key={i} className="price dolar-white fas fa-dollar-sign"></i>) :
                                p.push(<i key={i} className="dolar-grey fas fa-dollar-sign"></i>))
                    }
                    return p           
                })()
            }
        </div>     
    );
}

