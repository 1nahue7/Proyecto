import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Bienvenido a GameHubCafe</h1>
            <p>El mejor cibercafé gaming de la ciudad</p>
            <div className="hero-features">
              <div className="feature">
                <span className="icon">⚡</span>
                <span>PCs de Alto Rendimiento</span>
              </div>
              <div className="feature">
                <span className="icon">🎮</span>
                <span>Últimos Juegos</span>
              </div>
              <div className="feature">
                <span className="icon">🌐</span>
                <span>Internet de Alta Velocidad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Horarios</h3>
              <p>Lunes a Domingo</p>
              <p>9:00 AM - 11:00 PM</p>
            </div>
            <div className="info-card">
              <h3>Precios desde</h3>
              <p className="price">$2.000</p>
              <p>por hora</p>
            </div>
            <div className="info-card">
              <h3>Ubicación</h3>
              <p>Centro de la ciudad</p>
              <p>Fácil acceso</p>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-games">
        <div className="container">
          <h2>Juegos Populares</h2>
          <div className="games-grid">
            <div className="game-card">
              <h4>League of Legends</h4>
              <p>MOBA más popular del mundo</p>
            </div>
            <div className="game-card">
              <h4>Valorant</h4>
              <p>Shooter táctico competitivo</p>
            </div>
            <div className="game-card">
              <h4>Fortnite</h4>
              <p>Battle Royale favorito</p>
            </div>
            <div className="game-card">
              <h4>Counter-Strike 2</h4>
              <p>El clásico FPS renovado</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
