import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AboutUsPage from './pages/AboutUs/AboutUsPage.jsx'
import HowItWorksPage from './pages/HowItWorks/HowItWorksPage.jsx'
import PricingPage from './pages/Pricing/PricingPage.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import RegistrationPage from './pages/Registration/RegistrationPage.jsx'

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
      {path: "/about-us", element: <AboutUsPage />},
      {path: "/how-it-works", element: <HowItWorksPage />},
      {path: "/pricing", element: <PricingPage />},
      {path: "/login", element: <LoginPage />},
      {path: "/register", element: <RegistrationPage />}
      // {path: "*", element: <NotFoundPage />}
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
