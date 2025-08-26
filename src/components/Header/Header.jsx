import React from 'react'
import styles from "./header.module.css"

function Header() {
    const links = [
        {
            id: 1,
            url: '/',
            target: "Home Page"
        },
        {
            id: 2,
            url: '/services',
            target: "Services"
        },
        {
            id: 3,
            url: '/about',
            target: "About Us"
        },
        {
            id: 4,
            url: '/contact',
            target: "Contact Us"
        }
    ]


  return (
    <header>
        <img src="logo.png" alt="site logo" />
        <nav className={styles.navBar}>
            {links.map(link => (<a className={styles.navLink} href={link.url}>{link.target}</a>))}
        </nav>
    </header>
  )
}

export default Header