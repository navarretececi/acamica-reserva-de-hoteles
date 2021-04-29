import "./Footer.css"

export function Footer(){
    return(
        <footer className="footer">
             <div className="texto-footer font-roboto">Copyright ©</div>
            <div className="container-icono-footer">
                <a className="icono-footer" href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram"></i>
                </a>
                <a className="icono-footer" href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"></i>
                </a>
                <a className="icono-footer" href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook"></i>
                </a>
                <a className="icono-footer" className="icono-footer" href="https://telegram.org/" target="_blank">
                <i className="fab fa-telegram"></i>
                </a>
            </div>
        </footer>
    )
}