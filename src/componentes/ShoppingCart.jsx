import React, { useState, useEffect } from 'react'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // Calcular total cuando cambien los items del carrito
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    setTotal(newTotal)
  }, [cartItems])

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const removeItem = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const checkout = () => {
    if (cartItems.length > 0) {
      alert('¡Gracias por tu compra! Total: $' + total)
      clearCart()
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Botón del carrito */}
      <div className="cart-button" onClick={toggleCart}>
        <div className="cart-icon">
          🛒
        </div>
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>

      {/* Modal del carrito */}
      {isOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>CARRITO DE COMPRAS</h3>
              <button className="cart-close" onClick={toggleCart}>×</button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Tu carrito está vacío</p>
                <span>Agrega servicios desde la página de Servicios</span>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="item-info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="item-price">${item.price}</div>
                      <button 
                        className="remove-item" 
                        onClick={() => removeItem(index)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>TOTAL:</span>
                    <span className="total-amount">${total}</span>
                  </div>
                  <div className="cart-actions">
                    <button className="clear-cart" onClick={clearCart}>
                      LIMPIAR CARRITO
                    </button>
                    <button className="checkout-btn" onClick={checkout}>
                      FINALIZAR COMPRA
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ShoppingCart
