import "./About.css"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>Sobre GameHub</h1>
          <p>Tu destino gaming desde 2025</p>
        </div>

        <section className="about-story">
          <div className="historia">
            <h2>Nuestra Historia</h2>
            <p>
              GameHubCafe nació de la pasión por los videojuegos y la comunidad gaming. Fundado en 2025, buscamos crecer para
              convertirnos en el cibercafé gaming más popular de la ciudad, ofreciendo la mejor experiencia de juego con
              tecnología de punta y un ambiente acogedor.
            </p>
            <p>
              Nuestro objetivo es crear un espacio donde los gamers puedan disfrutar de sus juegos favoritos, conocer
              nuevos amigos y participar en torneos emocionantes. Creemos que los videojuegos unen a las personas y
              crean comunidades increíbles.
            </p>
          </div>
        </section>

        <section className="equipo">
          <h2>Nuestro Equipo</h2>
          <div className="equipo-grid">
            <div className="equipo-miembro">
              <h4>Nahuel Ponce</h4>
              <br/>
              <p>Fundador</p>
              <p></p>
            </div>
            <div className="equipo-miembro">
              <h4>Franco Leiva</h4>
              <br/>
              <p>Fundador</p>
              <p></p>
            </div>
            <div className="equipo-miembro">
              <h4>Mariano Aguilera</h4>
              <br/>
              <p>Fundador</p>
              <p></p>
            </div>
          </div>
        </section>

        <section className="values">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🎮</span>
              <h4>Pasión por el Gaming</h4>
              <p>Vivimos y respiramos videojuegos</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h4>Comunidad</h4>
              <p>Fomentamos las conexiones entre gamers</p>
            </div>
            <div className="value-card">
              <span className="value-icon">⚡</span>
              <h4>Tecnología de Punta</h4>
              <p>Siempre actualizados con lo último</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🏆</span>
              <h4>Excelencia</h4>
              <p>Buscamos la mejor experiencia posible</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
