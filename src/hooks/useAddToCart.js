import { useCart } from '../context/CartContext'

export const useAddToCart = () => {
  const { addToCart } = useCart()

  const addToCartWithAnimation = (item, elementRef) => {
    if (!elementRef || !elementRef.current) return

    const element = elementRef.current
    const rect = element.getBoundingClientRect()
    
    // Crear elemento clonado para la animación
    const clone = element.cloneNode(true)
    clone.style.position = 'fixed'
    clone.style.top = `${rect.top}px`
    clone.style.left = `${rect.left}px`
    clone.style.width = `${rect.width}px`
    clone.style.height = `${rect.height}px`
    clone.style.zIndex = '9998'
    clone.style.pointerEvents = 'none'
    clone.style.transition = 'all 0.6s ease-in-out'
    clone.style.transform = 'scale(1)'
    clone.style.opacity = '1'
    
    // Agregar al DOM
    document.body.appendChild(clone)
    
    // Forzar reflow
    clone.offsetHeight
    
    // Animar hacia el carrito
    const cartPosition = {
      top: 120,
      right: 30
    }
    
    const finalLeft = window.innerWidth - cartPosition.right - 60
    const finalTop = cartPosition.top
    
    clone.style.top = `${finalTop}px`
    clone.style.left = `${finalLeft}px`
    clone.style.width = '20px'
    clone.style.height = '20px'
    clone.style.transform = 'scale(0.3)'
    clone.style.opacity = '0'
    
    // Limpiar después de la animación
    setTimeout(() => {
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone)
      }
      // Agregar al carrito
      addToCart(item)
    }, 600)
  }

  return { addToCartWithAnimation }
}
