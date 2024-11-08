import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TrelloProvider } from './context/TrelloContext.jsx'

createRoot(document.getElementById('root')).render(
  <TrelloProvider>
    <App />
  </TrelloProvider>,
)
