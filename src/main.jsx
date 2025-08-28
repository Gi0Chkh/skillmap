import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import PricingPage from './pages/Pricing/PricingPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {path: "/", element: <App />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
)
