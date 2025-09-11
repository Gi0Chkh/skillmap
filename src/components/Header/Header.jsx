import React, { useContext } from 'react'
import styles from "./header.module.css"
import LangToggle from '../langToggle/LangToggle'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom';

function Header() {
  const [burgerBarActive, setBurgerBarActive] = React.useState(false);
  const {lang} = useContext(LanguageContext);

  const links = [
    {
      id: 1,
      url: '/',
      targetEn: "Home",
      targetKa: "მთავარი"
    },
    {
      id: 2,
      url: '/services',
      targetEn: "Services",
      targetKa: "სერვისები"
    },
    {
      id: 3,
      url: '/about-us',
      targetEn: "About Us",
      targetKa: "ჩვენს შესახებ"
    },
    {
      id: 4,
      url: '/profile',
      targetEn: "Profile",
      targetKa: "პროფილი"
    }
  ]

  return (
    <header style={burgerBarActive ? {position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10} : {}}>
        <nav className={styles.contentWrapper} style={burgerBarActive ? { flexDirection: "column", height: "100vh", transition: "all 2s ease-in-out"} : {}}>
          <div className={`${styles.linkWrapper} ${burgerBarActive && styles.showLinks}`}>
              {links.map(link => (<Link key={link.id} className={styles.navLink} to={link.url} onClick={() => setBurgerBarActive(false)}>{lang === "EN" ? link.targetEn : link.targetKa}</Link>))}
              {/* <LangToggle /> */}
          </div>
          
        </nav>
    </header>
  )
}

export default Header
