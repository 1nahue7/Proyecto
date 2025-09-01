import { useState } from 'react'
import { API_ENDPOINTS } from '../config/config'
import './Login.css'

const Login = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    nombre: '',
    apellido: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const endpoint = isLogin ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.REGISTRO
      const payload = isLogin 
        ? { username: formData.username, password: formData.password }
        : { username: formData.username, email: formData.email, password: formData.password, nombre: formData.nombre, apellido: formData.apellido }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (response.ok) {
        if (isLogin) {
          // Login exitoso
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', JSON.stringify({
            username: data.username,
            rol: data.rol
          }))
          setSuccess(data.mensaje)
          setTimeout(() => {
            onLoginSuccess(data)
            onClose()
          }, 1000)
        } else {
          // Registro exitoso
          setSuccess(data)
          setTimeout(() => {
            setIsLogin(true)
            setFormData({ username: '', email: '', password: '', nombre: '', apellido: '' })
          }, 2000)
        }
      } else {
        setError(isLogin ? data.mensaje : data)
      }
    } catch (err) {
      setError('Error de conexión. Verifica que el backend esté funcionando.')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ username: '', email: '', password: '', nombre: '', apellido: '' })
    setError('')
    setSuccess('')
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-close" onClick={onClose}>×</button>
        
        <div className="login-header">
          <h2>{isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}</h2>
          <p>{isLogin ? 'Accede a tu cuenta de GameHubCafe' : 'Crea tu cuenta en GameHubCafe'}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">USUARIO</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu usuario"
            />
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Ingresa tu email"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">NOMBRE</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellido">APELLIDO</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    placeholder="Apellido"
                  />
                </div>
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="password">CONTRASEÑA</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? 'PROCESANDO...' : (isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE')}
          </button>
        </form>

        <div className="login-footer">
          <button type="button" className="toggle-mode" onClick={toggleMode}>
            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>

        {isLogin && (
          <div className="demo-accounts">
            <p>CUENTAS DE DEMO:</p>
            <div className="demo-account">
              <span>Admin: admin / admin123</span>
            </div>
            <div className="demo-account">
              <span>Usuario: usuario / user123</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
