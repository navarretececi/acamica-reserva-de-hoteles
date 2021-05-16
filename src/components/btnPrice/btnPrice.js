import "./btnPrice.css"

export function Price(props){
    return(
        <div className="container-svg container-price">
            {
                props.price == "1" ? 
                <>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
               </>
                : ""
            }
            {
                props.price == "2" ? 
                <>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
                </>
                    : ""
            } 
            {
                props.price == "3" ? 
                <>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="dolar-grey fas fa-dollar-sign"></i>
                </>
                    : ""
            }
              {
                props.price == "4" ? 
                <>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                    <i className="price dolar-white fas fa-dollar-sign"></i>
                </>
                    : ""
            }
        </div>     
    );
}