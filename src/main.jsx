import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// ___COMPONENTS___
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import LanguageProvider from './context/LanguageContext.jsx'
import AI from './components/AI/AI.jsx'
// PAGES
import App from './App.jsx'
import ServicesPage from './pages/Services/ServicesPage.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'
import RegistrationPage from './pages/Registration/RegistrationPage.jsx'
import AboutUs from './pages/AboutUs/AboutUsPage.jsx'
import Profile from './pages/Profile/ProfilePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {path: "/", element: <App />},
      {path: "/services", element: <ServicesPage />},
      {path: "/login", element: <LoginPage />},
      {path: "/registration", element: <RegistrationPage />},
      {path: "/about-us", element: <AboutUs />},
      {path: "/profile", element: <Profile />},
      // {path: "*", element: <NotFoundPage />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AI/>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
)
