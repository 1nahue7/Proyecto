import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { API_ENDPOINTS } from '../config/config'
import LoginSpinner from './LoginSpinner'
import './Login.css'

const Login = ({ onClose, onLoginSuccess }) => {
  const { login } = useAuth()
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
          setSuccess(data.mensaje)
          // Usar el contexto de autenticación
          login(data)
          setTimeout(() => {
            onLoginSuccess(data)
            onClose()
          }, 1000)
        } else {
          // Registro exitoso - hacer login automático
          setSuccess(data.mensaje || data)
          setTimeout(async () => {
            try {
              const loginResponse = await fetch(API_ENDPOINTS.LOGIN, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username: formData.username,
                  password: formData.password
                })
              })
              
              const loginData = await loginResponse.json()
              
              if (loginData.token) {
                // Usar el contexto de autenticación
                login(loginData)
                onLoginSuccess(loginData)
                onClose()
              } else {
                setIsLogin(true)
                setFormData({ username: '', email: '', password: '', nombre: '', apellido: '' })
                setError('Registro exitoso. Por favor, inicia sesión manualmente.')
              }
            } catch (err) {
              setIsLogin(true)
              setFormData({ username: '', email: '', password: '', nombre: '', apellido: '' })
              setError('Registro exitoso. Por favor, inicia sesión manualmente.')
            }
          }, 1000)
        }
      } else {
        setError(data.mensaje || data)
        setLoading(false)
      }
    } catch (err) {
      console.error('Error en la petición:', err)
      setError(`Error de conexión: ${err.message}. Verifica que el backend esté funcionando.`)
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
    <>
      <LoginSpinner isVisible={loading} />
      <div className="login-overlay">
        <div className="login-modal">
          <div className="login-header">
            <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            {!isLogin && (
              <>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Procesando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
            </button>
          </form>

          <div className="login-footer">
            <p>
              {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
              <button type="button" onClick={toggleMode} className="toggle-btn">
                {isLogin ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login