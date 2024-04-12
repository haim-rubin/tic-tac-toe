import React from 'react'
import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './components/App'
import appState from './store/RootStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider {...appState}>
      <App />
    </Provider>
  </React.StrictMode>,
)
