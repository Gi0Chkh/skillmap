import React, { useState, useContext, useRef } from "react";
import styles from "./loginPage.module.css";
import Input from "../../components/Input/Input";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={styles.login_box}>
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
              placeholder={lang === "EN" ? "Email" : "მეილი"}
            />
          </div>
          <div className={styles.user_box}>
            <Input
              type="password"
              id="password"
              placeholder={lang === "EN" ? "Password" : "პაროლი"}
            />
          </div>
          <Link to="#" className={styles.forgotPassword}>
            {lang === "EN" ? "Forgot password?" : "დაგავიწყდა პაროლი?"}
          </Link>
        </div>
        <button className={styles.loginButton} onClick="#">
          {lang === "EN" ? "Log In" : "შესვლა"}
        </button>
        <p>
          {lang === "EN" ? "Don't have an account?" : "არ გაქვს აქაუნთი?"}{" "}
          <Link to="/registration" className={styles.dontHaveAcc}>
            {lang === "EN" ? "Sign Up" : "შესვლა"}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
