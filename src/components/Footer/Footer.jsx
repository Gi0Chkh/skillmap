import React from "react";
import styles from "./footer.module.css";
import { LanguageContext } from "../../context/LanguageContext";

function Footer() {
  const { lang } = React.useContext(LanguageContext);
  return (
    <footer>
      <div>
        <h1>Contact Us</h1>
        <p>(+995)551 14 14 11</p>
        <p>Email:skillMap@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
