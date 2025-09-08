import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { API_ENDPOINTS } from '../config/config'
import { useApi } from '../hooks/useApi'
import AdminConfigModalSimple from './AdminConfigModalSimple'
import './AdminDropdown.css'

const AdminDropdown = () => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [showUserList, setShowUserList] = useState(false)
  const [showConfigModal, setShowConfigModal] = useState(false)
  const dropdownRef = useRef(null)
  const { loading, error, makeRequest } = useApi()

  const isAdmin = user?.rol === 'admin' || user?.rol === 'ADMIN'

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setShowUserList(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user) return null

  const fetchUsers = async () => {
    try {
      const data = await makeRequest(API_ENDPOINTS.ADMIN_USERS)
      setUsers(data)
      setShowUserList(true)
    } catch (err) {
      console.error('Error fetching users:', err)
    }
  }

  const showStats = () => {
    if (users.length === 0) {
      alert('📊 Estadísticas de la Base de Datos\n\n⚠️ No hay datos cargados\n\nHaz clic en "Ver Usuarios" primero para cargar la información.')
      return
    }

    const totalUsers = users.length
    const activeUsers = users.filter(u => u.activo).length
    const adminUsers = users.filter(u => u.rol === 'admin' || u.rol === 'ADMIN').length
    const regularUsers = users.filter(u => u.rol === 'user' || u.rol === 'USER').length
    
    alert(`📊 Estadísticas de la Base de Datos\n\n👥 Total de usuarios: ${totalUsers}\n✅ Usuarios activos: ${activeUsers}\n👑 Administradores: ${adminUsers}\n👤 Usuarios regulares: ${regularUsers}\n\n📈 Porcentaje de usuarios activos: ${Math.round((activeUsers/totalUsers)*100)}%`)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setShowUserList(false)
    }
  }

  return (
    <div className="admin-dropdown" ref={dropdownRef}>
      <button 
        className="admin-toggle" 
        onClick={toggleDropdown}
        title="Menú de Usuario"
      >
        <span className="admin-icon">⚙️</span>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="admin-menu">
          <div className="admin-menu-header">
            <h3>{isAdmin ? 'Panel de Administración' : 'Menú de Usuario'}</h3>
            <span className="admin-role">{user.rol}</span>
          </div>

          <div className="admin-menu-content">
            {isAdmin && (
              <>
                <button 
                  className="admin-menu-item"
                  onClick={fetchUsers}
                  disabled={loading}
                >
                  👥 Ver Usuarios ({loading ? 'Cargando...' : 'Cargar'})
                </button>

                <button 
                  className="admin-menu-item"
                  onClick={showStats}
                >
                  📊 Estadísticas
                </button>

                <button 
                  className="admin-menu-item"
                  onClick={() => {
                    setShowConfigModal(true)
                    setIsOpen(false)
                  }}
                >
                  ⚙️ Configuración
                </button>
              </>
            )}
            
            {!isAdmin && (
              <>
                <button 
                  className="admin-menu-item"
                  onClick={() => {
                    alert('👤 Mi Perfil\n\nUsuario: ' + user?.username + '\nRol: ' + user?.rol + '\n\nFuncionalidades disponibles:\n- Editar perfil\n- Cambiar contraseña\n- Ver historial')
                  }}
                >
                  👤 Mi Perfil
                </button>

                <button 
                  className="admin-menu-item"
                  onClick={() => {
                    alert('⚙️ Configuración de Usuario\n\nUsuario: ' + user?.username + '\nRol: ' + user?.rol + '\n\nOpciones disponibles:\n- Preferencias\n- Notificaciones\n- Privacidad')
                  }}
                >
                  ⚙️ Configuración
                </button>
              </>
            )}
          </div>

          {error && (
            <div className="admin-error">
              {error}
            </div>
          )}

          {showUserList && (
            <div className="user-list">
              <h4>Lista de Usuarios ({users.length})</h4>
              <div className="user-list-content">
                {users.map(user => (
                  <div key={user.id} className="user-item">
                    <div className="user-info">
                      <strong>{user.username}</strong>
                      <span className="user-role-badge">{user.rol}</span>
                    </div>
                    <div className="user-details">
                      <div>📧 {user.email}</div>
                      <div>👤 {user.nombre} {user.apellido}</div>
                      <div>📅 Registrado: {new Date(user.fechaRegistro).toLocaleDateString()}</div>
                      <div>✅ {user.activo ? 'Activo' : 'Inactivo'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <AdminConfigModalSimple 
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
      />
    </div>
  )
}

export default AdminDropdown