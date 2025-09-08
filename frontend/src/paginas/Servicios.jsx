import { useRef } from "react"
import { useCart } from "../context/CartContext"
import "./Servicios.css"

const Servicios = () => {
  const { addToCart } = useCart()
  
  const servicios = [
    {
      id: 1,
      titulo: "Gaming por Horas",
      precio: "$2.000/hora",
      precioNumero: 2000,
      oferta: ["PCs Gaming de alta gama", "Monitores 144Hz", "Periféricos gaming", "Todos los juegos populares"],
    },
    {
      id: 2,
      titulo: "Paquete 5 Horas",
      precio: "$8.000",
      precioNumero: 8000,
      oferta: ["Descuento del 20%", "Bebida incluida", "Snack gratis", "Reserva de PC garantizada"],
    },
    {
      id: 3,
      titulo: "Paquete Nocturno",
      precio: "$15.000",
      precioNumero: 15000,
      oferta: [
        "8 horas (10 PM - 6 AM)",
        "Pizza personal incluida",
        "Bebidas ilimitadas",
        "Ambiente nocturno especial",
      ],
    },
    {
      id: 4,
      titulo: "Torneo Privado",
      precio: "$50.000",
      precioNumero: 50000,
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
          {servicios.map((servicio) => {
            const cardRef = useRef(null)
            
            const handleAddToCart = () => {
              const item = {
                id: servicio.id,
                name: servicio.titulo,
                description: servicio.oferta.join(', '),
                price: servicio.precioNumero
              }
              addToCart(item)
            }
            
            return (
              <div key={servicio.id} className="service-card" ref={cardRef}>
                <h3>{servicio.titulo}</h3>
                <div className="price">{servicio.precio}</div>
                <ul className="features">
                  {servicio.oferta.map((oferta, idx) => (
                    <li key={idx}>✓ {oferta}</li>
                  ))}
                </ul>
                <button 
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                >
                  AGREGAR AL CARRITO
                </button>
              </div>
            )
          })}
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
