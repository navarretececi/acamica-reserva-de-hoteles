import "./header.css";
import { Description } from "../description/description";
import { Price } from "../btnPrice/btnPrice";
import { Reset } from "../btnReset/btnReset";
import { naturalDate } from "../../utils/date";

export function Header(props) {
  return (
    <header className="header">
      <div className="flex-row">
        <h1 className="principal-title font-roboto">Hoteles</h1>
        <Reset handlerReset={props.handlerReset} />
      </div>
      
        <div className="flex-row">
            <p className="font-roboto detail-header">Búsqueda de hoteles: </p>
            <p className="font-roboto detail-header">
            {props.size && (
                <span>
                {props.size === "all" ? false : `de tamaño: ${props.size}, `}
                </span>
            )}
            {props.price && (
                <span>
                {props.price === "all"
                    ? false
                    : `nivel de precio: ${props.price}, `}
                </span>
            )}
            {props.dateFrom && (
                <span>
                {props.dateFrom === ""
                    ? false
                    : `desde el: ${naturalDate(props.dateFrom)} , `}
                </span>
            )}
            {props.dateTo && (
                <span>
                {props.dateTo === ""
                    ? false
                    : `hasta el: ${naturalDate(props.dateTo)}, `}
                </span>
            )}
            {props.country && (
                <span>
                {props.country === "all"
                    ? false
                    : `ubicados en: ${props.country}`}
                </span>
            )}
            </p>
        </div>

      <div className="flex-row container-description">
        {props.dateFrom ? (
          <Description
            image="./images/calendar.svg"
            description={`Desde el día: ${props.dateFrom}`}
          />
        ) : (
          ""
        )}
        {props.dateTo ? (
          <Description
            image="./images/calendar.svg"
            description={`Hasta el día: ${props.dateTo}`}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex-row container-description">
        {props.country === "all" ? (
          ""
        ) : props.country ? (
          <Description
            image="./images/location.svg"
            description={props.country}
          />
        ) : (
          ""
        )}

        {props.price === "all" ? (
          ""
        ) : props.price ? (
          <Price price={props.price} />
        ) : (
          ""
        )}

        {props.size === "all" ? (
          ""
        ) : props.size ? (
          <Description image="./images/room.svg" description={props.size} />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
