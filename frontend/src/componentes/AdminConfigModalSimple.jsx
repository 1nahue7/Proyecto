import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { API_ENDPOINTS } from '../config/config'
import { useApi } from '../hooks/useApi'
import './AdminConfigModalSimple.css'

const AdminConfigModalSimple = ({ isOpen, onClose }) => {
  const { user } = useAuth()
  const [users, setUsers] = useState([])
  const [activeTab, setActiveTab] = useState('users')
  const { loading, error, makeRequest, setError } = useApi()

  useEffect(() => {
    if (isOpen) {
      fetchUsers()
    }
  }, [isOpen])

  const fetchUsers = async () => {
    try {
      const data = await makeRequest(API_ENDPOINTS.ADMIN_USERS)
      setUsers(data)
    } catch (err) {
      console.error('Error fetching users:', err)
    }
  }

  const getStats = () => ({
    total: users.length,
    active: users.filter(u => u.activo).length,
    admins: users.filter(u => u.rol === 'admin' || u.rol === 'ADMIN').length,
    regular: users.filter(u => u.rol === 'user' || u.rol === 'USER').length
  })

  if (!isOpen) return null

  const stats = getStats()

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal">
        <div className="admin-modal-header">
          <h2>Panel de Administración - GameHubCafe</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="admin-modal-content">
          <div className="admin-tabs">
            <button 
              className={`tab ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              👥 Gestión de Usuarios
            </button>
            <button 
              className={`tab ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => setActiveTab('stats')}
            >
              📊 Estadísticas
            </button>
            <button 
              className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Configuración
            </button>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="users-section">
              <div className="section-header">
                <h3>Lista de Usuarios ({users.length})</h3>
                <button 
                  className="refresh-btn"
                  onClick={fetchUsers}
                  disabled={loading}
                >
                  {loading ? '🔄' : '🔄'} Actualizar
                </button>
              </div>

              {loading ? (
                <div className="loading">Cargando usuarios...</div>
              ) : error ? (
                <div className="error-section">
                  <div className="error-message">{error}</div>
                  <div className="error-actions">
                    <button className="retry-btn" onClick={fetchUsers}>
                      🔄 Reintentar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="users-list">
                  {users.map(user => (
                    <div key={user.id} className="user-card">
                      <div className="user-info">
                        <div className="user-main">
                          <h4>{user.username}</h4>
                          <span className={`role-badge ${user.rol}`}>{user.rol}</span>
                          <span className={`status-badge ${user.activo ? 'active' : 'inactive'}`}>
                            {user.activo ? 'Activo' : 'Inactivo'}
                          </span>
                        </div>
                        <div className="user-details">
                          <p><strong>Email:</strong> {user.email}</p>
                          <p><strong>Nombre:</strong> {user.nombre} {user.apellido}</p>
                          <p><strong>Registrado:</strong> {new Date(user.fechaRegistro).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="stats-section">
              <h3>Estadísticas de la Base de Datos</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>👥 Total de Usuarios</h4>
                  <span className="stat-number">{stats.total}</span>
                </div>
                <div className="stat-card">
                  <h4>✅ Usuarios Activos</h4>
                  <span className="stat-number">{stats.active}</span>
                </div>
                <div className="stat-card">
                  <h4>👑 Administradores</h4>
                  <span className="stat-number">{stats.admins}</span>
                </div>
                <div className="stat-card">
                  <h4>👤 Usuarios Regulares</h4>
                  <span className="stat-number">{stats.regular}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h3>Configuración del Sistema</h3>
              <div className="settings-grid">
                <div className="setting-card">
                  <h4>🔒 Seguridad</h4>
                  <p>Configuración de políticas de contraseñas y autenticación</p>
                  <button className="setting-btn">Configurar</button>
                </div>
                <div className="setting-card">
                  <h4>📊 Logs</h4>
                  <p>Ver y gestionar logs de actividad del sistema</p>
                  <button className="setting-btn">Ver Logs</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminConfigModalSimple