import React from 'react'
import ReactDOM from 'react-dom/client' // Import correto para React 18+
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
