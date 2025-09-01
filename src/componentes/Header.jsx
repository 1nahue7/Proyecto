import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import Login from "./Login"
import ShoppingCart from "./ShoppingCart"
import "./Header.css"

const Header = () => {
  const location = useLocation()
  const { user, logout, isAuthenticated } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  const handleLoginSuccess = (userData) => {
    // El contexto se actualiza automáticamente
    setShowLogin(false)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/icono.png" alt="Logo GameHubCafe" className="logo-img" />
              <span className="logo-text">GameHubCafe</span>
            </Link>
          </div>
          <nav className="nav">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Inicio
            </Link>
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
          
          <div className="auth-section">
            {isAuthenticated() ? (
              <div className="user-info">
                <span className="username">{user.username}</span>
                <span className="user-role">({user.rol})</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <button className="login-btn" onClick={() => setShowLogin(true)}>
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      </header>

      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)} 
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      
      <ShoppingCart />
    </>
  )
}

export default Header
