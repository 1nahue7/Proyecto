import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/icono.png" alt="Logo GameHubCafe" className="logo-img" />
          </Link>
        </div>
        <h1 className="logo">GameHubCafe</h1>
        <nav className="nav">

          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Inicio
          </Link>                         {/*className='nav-link active' */}
          <Link to="/services" className={location.pathname === "/services" ? "nav-link active" : "nav-link"}>
            Servicios
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            Nosotros
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
