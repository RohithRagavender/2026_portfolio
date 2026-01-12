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
          background: "#020617",
          color: "#e5e7eb",
          border: "1px solid rgba(34,211,238,0.4)",
          boxShadow: "0 0 25px rgba(34,211,238,0.6)",
          fontFamily: "Poppins",
        },
      }}
    />
  </StrictMode>,
)
