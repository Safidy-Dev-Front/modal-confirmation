import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfirmGlobal } from './components/ConfirmGlobal'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfirmGlobal/>
    <App />
  </React.StrictMode>,
)
