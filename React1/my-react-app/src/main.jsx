import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { InfoProvider } from './hooks/InfoContext'
import { UserProvider } from './hooks/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <InfoProvider>
        <UserProvider>
    <App />
        </UserProvider>
      </InfoProvider>
    </BrowserRouter>
  </StrictMode>,
)
