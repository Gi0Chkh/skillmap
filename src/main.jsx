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
import ProfilePage from './pages/Profile/ProfilePage.jsx'
import AboutUsPage from './pages/AboutUs/AboutUsPage.jsx'
import Background from './components/Background Animation/background.jsx'

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
      {path: "/register", element: <RegistrationPage />},
      {path: "/profile", element: <ProfilePage />},
      {path: "/about-us", element: <AboutUsPage />}
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
    <Background />
  </StrictMode>,
)
