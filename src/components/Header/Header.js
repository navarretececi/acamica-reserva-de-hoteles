import './header.css';

export function Header(){
return (
    <header className="header">
        <h1 className="principal-title font-roboto">Hoteles</h1>
        <h2 className="secundary-title font-roboto">desde el <span className="span-bold">martes, 1 de enero 2019</span> hasta el <span className="span-bold">miércoles, 2 de enero de 2019</span></h2>
    </header>
)
}