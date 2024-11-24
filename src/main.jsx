import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Composants/App.jsx'
import './main.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
