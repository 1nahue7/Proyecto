// Configuración del backend
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tu-backend-produccion.com' 
  : 'http://localhost:8080'

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTRO: `${API_BASE_URL}/api/auth/registro`,
  TEST: `${API_BASE_URL}/api/auth/test`
}

// Configuración de la aplicación
export const APP_CONFIG = {
  APP_NAME: 'GameHubCafe',
  VERSION: '1.0.0',
  TOKEN_KEY: 'gamehubcafe_token',
  USER_KEY: 'gamehubcafe_user'
}



