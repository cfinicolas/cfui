import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

const renderApp = () => {
  const containerId = 'so-passwordgen-app'

  const root = ReactDOM.createRoot(document.getElementById(containerId) as HTMLElement)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

window.onload = renderApp
