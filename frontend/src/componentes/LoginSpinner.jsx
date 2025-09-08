import React from 'react'
import './LoginSpinner.css'

const LoginSpinner = ({ isVisible, message = "AUTENTICANDO..." }) => {
  if (!isVisible) return null

  return (
    <div className="login-spinner-overlay">
      <div className="login-spinner-container">
        <div className="login-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-inner"></div>
        </div>
        <div className="spinner-message">{message}</div>
        <div className="spinner-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  )
}

export default LoginSpinner
