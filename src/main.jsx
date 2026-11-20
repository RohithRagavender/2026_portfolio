import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
       <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#0b1020",
          color: "#e6ecff",
          border: "1px solid #4f7cff",
          borderRadius: "10px",
          fontFamily: "Manrope, sans-serif",
        },
      }}
    />
  </StrictMode>,
)
