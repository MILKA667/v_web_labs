import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext'
import { LikedProvider } from './contexts/LikedContext.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LikedProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LikedProvider>
  </React.StrictMode>,
)