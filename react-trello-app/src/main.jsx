import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import App from './App.jsx'
import { TrelloProvider } from './context/TrelloContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TrelloProvider>
      <App />
    </TrelloProvider>
  </BrowserRouter>
)
