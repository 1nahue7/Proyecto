import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  // Calcular total cuando cambien los items
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0)
    setTotal(newTotal)
  }, [cartItems])

  // Agregar item al carrito
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item])
  }

  // Remover item del carrito
  const removeFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  // Limpiar carrito
  const clearCart = () => {
    setCartItems([])
  }

  // Obtener cantidad de items
  const getCartCount = () => {
    return cartItems.length
  }

  const value = {
    cartItems,
    total,
    addToCart,
    removeFromCart,
    clearCart,
    getCartCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
