import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext.tsx'
import { WatchlistProvider } from './context/WatchlistContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <WatchlistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WatchlistProvider>
    </AuthProvider>
  </StrictMode>
)