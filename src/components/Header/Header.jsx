import React from 'react'
import styles from "./header.module.css"

function Header() {
    const links = [
        {
            id: 1,
            url: '/',
            target: "Home"
        },
        {
            id: 2,
            url: '/about-us',
            target: "About Us"
        },
        {
            id: 3,
            url: '/how-it-works',
            target: "How It Works"
        },
        {
            id: 4,
            url: '/pricing',
            target: "Pricing"
        }
    ]


  return (
    <header>
        <nav className={styles.contentWrapper}>
            <div className={styles.linkWrapper}>
                <a href='/' className={styles.logoLink}><img src="/skillMapIcon.svg" alt="site icon" /></a>
                {links.map(link => (<a key={link.id} className={styles.navLink} href={link.url}>{link.target}</a>))}
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.loginButton}>Log In</button>
                <button className={styles.regButton}>Join Us</button>
            </div>
        </nav>
    </header>
  )
}

export default Header