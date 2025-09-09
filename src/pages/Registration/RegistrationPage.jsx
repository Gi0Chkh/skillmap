import React, { useState, useContext, useRef } from "react";
import styles from "./registrationPage.module.css";
import Input from "../../components/Input/Input";
import { LanguageContext } from "../../context/LanguageContext";

function RegistrationPage() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={styles.registration_box}>
      <img
        src="/public/skillMap(no text).svg"
        alt="skillMap icon"
        className={styles.icon}
      />
      <form>
        <h2>SkillMap</h2>
        <div className={styles.inputs}>
          <div className={styles.user_box}>
            <Input
              type="text"
              placeholder={lang === "EN" ? "Email" : "შესვლა"}
            />
          </div>
          <div className={styles.user_box}>
            <Input
              type="password"
              id="password"
              placeholder={lang === "EN" ? "Password" : "პაროლი"}
            />
          </div>
        </div>
        <button className={styles.registrationButton} onClick="#">
          {lang === "EN" ? "Sign up" : "დარეგისტრირდი"}
        </button>
        <p>
          {lang === "EN" ? "Already have an account?" : "უკვე გაქვს აქაუნთი?"}{" "}
          <a href="/login" className={styles.dontHaveAcc}>
            {lang === "EN" ? "Log In" : "შესვლა"}
          </a>
        </p>
      </form>
    </div>
  );
}

export default RegistrationPage;
