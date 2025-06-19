import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import Home from "./paginas/Home"
import Servicios from "./paginas/Servicios"
import About from "./paginas/About"
import Contacto from "./paginas/Contacto"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Servicios />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
