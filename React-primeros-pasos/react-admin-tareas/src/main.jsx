import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './main.css'
//import Tareas from './AppTareas.jsx'
import AppTareas from './AppTareas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    {/* 
     <App />
      */}
      <AppTareas />
  </React.StrictMode>,
)
