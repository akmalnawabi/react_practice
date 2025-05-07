import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContextPorvider from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextPorvider>
    <App />
  </ContextPorvider>

)
