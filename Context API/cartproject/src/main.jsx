import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from "./pages/Products.jsx"
import CartItems from "./pages/CartItems.jsx"
import CartProvider from "../src/components/CartProvider.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Products />
  },
  {
    path:'/cart',
    element:<CartItems />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
