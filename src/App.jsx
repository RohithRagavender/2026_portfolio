import { useEffect } from 'react'
import Home from './Pages/Home'

const App = () => {
  // block right-click menu and image dragging (copy/save via mouse)
  useEffect(() => {
    const block = (e) => {
      if (!e.target.closest('input, textarea')) e.preventDefault()
    }
    document.addEventListener('contextmenu', block)
    document.addEventListener('dragstart', block)
    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    return () => {
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('dragstart', block)
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
    }
  }, [])

  return (
    <div><Home /></div>
  )
}

export default App
