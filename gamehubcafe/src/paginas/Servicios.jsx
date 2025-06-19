import "./Servicios.css"

const Servicios = () => {
  const servicios = [
    {
      titulo: "Gaming por Horas",
      precio: "$2.000/hora",
      oferta: ["PCs Gaming de alta gama", "Monitores 144Hz", "Periféricos gaming", "Todos los juegos populares"],
    },
    {
      titulo: "Paquete 5 Horas",
      precio: "$8.000",
      oferta: ["Descuento del 20%", "Bebida incluida", "Snack gratis", "Reserva de PC garantizada"],
    },
    {
      titulo: "Paquete Nocturno",
      precio: "$15.000",
      oferta: [
        "8 horas (10 PM - 6 AM)",
        "Pizza personal incluida",
        "Bebidas ilimitadas",
        "Ambiente nocturno especial",
      ],
    },
    {
      titulo: "Torneo Privado",
      precio: "$50.000",
      oferta: ["Sala privada 2 horas", "Hasta 10 jugadores", "Streaming del torneo", "Premios incluidos"],
    },
  ]

  return (
    <div className="services">
      <div className="container">
        <div className="services-header">
          <h1>Nuestros Servicios</h1>
          <p>Encuentra el plan perfecto para tu experiencia gaming</p>
        </div>

        <div className="services-grid">
          {servicios.map((servicios, index) => (
            <div key={index} className="service-card">
              <h3>{servicios.titulo}</h3>
              <div className="price">{servicios.precio}</div>
              <ul className="features">
                {servicios.oferta.map((ofertas, idx) => (
                  <li key={idx}>✓ {ofertas}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="additional-services">
          <h2>Servicios Adicionales</h2>
          <div className="additional-grid">
            <div className="additional-card">
              <h4>🍕 Comida y Bebidas</h4>
              <p>Snacks, bebidas y comidas para que no tengas que parar de jugar</p>
            </div>
            <div className="additional-card">
              <h4>🎧 Alquiler de Periféricos</h4>
              <p>Auriculares gaming, mouse y teclados mecánicos premium</p>
            </div>
            <div className="additional-card">
              <h4>💾 Almacenamiento en la Nube</h4>
              <p>Guarda tus partidas y configuraciones en nuestro servidor</p>
            </div>
            <div className="additional-card">
              <h4>🏆 Coaching Gaming</h4>
              <p>Mejora tu nivel con nuestros coaches profesionales</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Servicios
