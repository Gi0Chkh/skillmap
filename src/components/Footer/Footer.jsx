import React from "react";
import styles from "./footer.module.css";
import { LanguageContext } from "../../context/LanguageContext";

function Footer() {
  const { lang } = React.useContext(LanguageContext);
  return (
    <footer className={styles.footer}>
      Footer
    </footer>
  );
}

export default Footer;
