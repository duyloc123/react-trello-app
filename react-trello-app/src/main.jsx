import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { TrelloProvider } from './context/TrelloContext.jsx'

createRoot(document.getElementById('root')).render(
  <TrelloProvider>
    <App />
  </TrelloProvider>,
)
