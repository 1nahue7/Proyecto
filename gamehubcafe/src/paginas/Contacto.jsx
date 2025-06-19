"use client"

import { useState } from "react"
import "./Contacto.css"
import { FaDiscord, FaFacebookF } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="contacto">
      <div className="container">
        <div className="contacto-header">
          <h1>Contáctanos</h1>
          <p>¿Tienes preguntas? ¡Estamos aquí para ayudarte!</p>
        </div>

        <div className="contacto-contenido">
          <div className="contacto-info">
            <h2>Información de Contacto</h2>

            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Dirección</h4>  
                <p>
                  -
                  <br />
                  Neuquén centro
                </p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Teléfono</h4>
                <p>2995107468</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>No disponible</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">🕒</span>
              <div>
                <h4>Horarios</h4>
                <p>
                  Lunes a Domingo
                  <br />
                  9:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="redes">
              <h4>Síguenos</h4>
              <div className="redes-links">
                <span><FaFacebookF></FaFacebookF></span>
                <span><FaInstagram></FaInstagram></span>
                <span><FaXTwitter></FaXTwitter></span>
                <span><FaDiscord></FaDiscord></span>
              </div>
            </div>
          </div>

          <div className="contacto-form">
            <h2>Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
