import "./Footer.css"

const Footer = () => {
  
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-contenido">
          <div className="footer-seccion">
            <h3>GameHubCafe</h3>
            {console.log('hola')}
            <p>El mejor cibercafé gaming de la ciudad</p>
          </div>

          <div className="footer-seccion">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className="footer-seccion">
            <h4>Horarios</h4>
            <p>Lunes a Domingo</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>

          <div className="footer-seccion">
            <h4>Contacto</h4>
            <p>📞 +2995107468</p>
            <p>✉️ No disponible</p>
          </div>
        </div>

        <div className="footer-inferior">
          <p>&copy; 2025 GameHub. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
