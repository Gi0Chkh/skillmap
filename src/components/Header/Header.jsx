import React, { useState, useContext, useRef } from "react";
import styles from "./header.module.css";
import LangToggle from "../langToggle/LangToggle";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function Header() {
  const { lang } = useContext(LanguageContext);

  const links = [
    {
      id: 1,
      url: "/",
      targetEn: "Home",
      targetKa: "მთავარი",
    },
    {
      id: 2,
      url: "/about-us",
      targetEn: "About Us",
      targetKa: "ჩვენს შესახებ",
    },
    {
      id: 3,
      url: "/how-it-works",
      targetEn: "How It Works",
      targetKa: "როგორ მუშაობს",
    },
    {
      id: 4,
      url: "/pricing",
      targetEn: "Pricing",
      targetKa: "ფასები",
    },
  ];

  const [toggled, setToggled] = useState(false);
  const window = useRef(null);

  function burgerFunc() {
    if (window.current) {
      if (toggled) {
        window.current.style.right = -100 + "%";
      } else {
        window.current.style.right = 0;
      }
    }
    setToggled(!toggled);
  }

  return (
    <header>
      <nav ref={window} className={styles.contentWrapper}>
        <div className={styles.linkWrapper}>
          {/* <Link to='/' className={styles.logoLink}><img src="/skillMapIcon.svg" alt="site icon" /></Link> */}
          {links.map((link) => (
            <Link key={link.id} className={styles.navLink} to={link.url}>
              {lang === "EN" ? link.targetEn : link.targetKa}
            </Link>
          ))}
          <LangToggle />
          <img
            src="/public/Profile.png"
            alt="profile pic"
            to="/login"
            className={styles.profile}
          />
          <Link to="/login">
            <button className={styles.loginButton}>
              {lang === "EN" ? "Log In" : "შესვლა"}
            </button>
          </Link>
          <Link to="/register">
            <button className={styles.regButton}>
              {lang === "EN" ? "Join Us" : "შემოგვიერთდი"}
            </button>
          </Link>
        </div>
      </nav>
      <button className={styles.burger} onClick={() => burgerFunc()}>
        <img
          src={toggled ? "/public/Cross.png" : "/public/Burger.png"}
          alt="burget icon"
        />
      </button>
    </header>
  );
}

export default Header;
