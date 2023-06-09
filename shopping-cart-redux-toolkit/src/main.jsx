import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//importa el provider
import { Provider } from 'react-redux'
//importa el store
import { store } from './store/index.js'

import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
