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
      url: '/about-us',
      targetEn: "About Us",
      targetKa: "ჩვენს შესახებ"
    },
    {
      id: 3,
      url: '/how-it-works',
      targetEn: "How It Works",
      targetKa: "როგორ მუშაობს"
    },
    {
      id: 4,
      url: '/pricing',
      targetEn: "Pricing",
      targetKa: "ფასები"
    }
  ]

  const handleBurgerBarClick = () => {
    setBurgerBarActive(!burgerBarActive);
  };

  return (
    <header>
        <nav className={styles.contentWrapper} style={burgerBarActive ? { flexDirection: "column-reverse" } : {}}>
          <div className={`${styles.linkWrapper} ${burgerBarActive && styles.showLinks}`}>
              {/* <Link to='/' className={styles.logoLink}><img src="/skillMapIcon.svg" alt="site icon" /></Link> */}
              {links.map(link => (<Link key={link.id} className={styles.navLink} to={link.url}>{lang === "EN" ? link.targetEn : link.targetKa}</Link>))}
          </div>
          <div className={styles.buttonWrapper}>
            <div className={`${styles.burgerBar} ${burgerBarActive && styles.activeBar}`} onClick={handleBurgerBarClick}>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <LangToggle />
            <Link to='/login'><button className={styles.loginButton}>{lang === "EN" ? "Log In" : "შესვლა"}</button></Link>
            <Link to='/register'><button className={styles.regButton}>{lang === "EN" ? "Join Us" : "შემოგვიერთდი"}</button></Link>
          </div>
        </nav>
    </header>
  )
}

export default Header
