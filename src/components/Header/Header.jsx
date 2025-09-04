import React, { useContext } from 'react'
import styles from "./header.module.css"
import LangToggle from '../langToggle/LangToggle'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom';

function Header() {
  const [burgerBarActive, setBurgerBarActive] = React.useState("");
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

  const handleBurgerBarClick = () => {
    setBurgerBarActive(!burgerBarActive);
  };

  return (
    <header style={burgerBarActive ? {position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10} : {}}>
        <nav className={styles.contentWrapper} style={burgerBarActive ? { flexDirection: "column", height: "100vh", transition: "all 2s ease-in-out"} : {}}>
          <div className={styles.phoneHeader}>
            <Link to="/"><img src="/skillMap(no text).svg" alt="Skillmap Logo"  className={styles.headerIcon}/></Link>
            <div className={`${styles.burgerBar} ${burgerBarActive && styles.activeBar}`} onClick={handleBurgerBarClick}>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
          <div className={`${styles.linkWrapper} ${burgerBarActive && styles.showLinks}`}>
              {/* <Link to='/' className={styles.logoLink}><img src="/skillMapIcon.svg" alt="site icon" /></Link> */}
              {links.map(link => (<Link key={link.id} className={styles.navLink} to={link.url}>{lang === "EN" ? link.targetEn : link.targetKa}</Link>))}
          </div>
          <div className={`${styles.buttonWrapper} ${burgerBarActive && styles.showButtons}`}>
            <LangToggle />
            <Link to='/login'><button className={styles.loginButton}>{lang === "EN" ? "Log In" : "შესვლა"}</button></Link>
          </div>
        </nav>
    </header>
  )
}

export default Header
