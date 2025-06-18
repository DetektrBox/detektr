import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl">
      🚀 Detektr Frontend is Live!
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)