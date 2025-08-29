import React, { useState, useContext, useRef } from "react";
import styles from './loginPage.module.css'
import Input from '../../components/Input/Input'
import { LanguageContext } from "../../context/LanguageContext";

function LoginPage() {
  const { lang } = useContext(LanguageContext);
  return (
      <div class = {styles.login_box}>
        <img src="/public/skillMap Icon.svg" alt="skillMap icon" className={styles.icon} />
        <form>
            <div class = {styles.user_box}>
                <Input type="text" placeholder={lang === "EN" ? "Email" : "მეილი"}/>
            </div>
            <div class = {styles.user_box}>
                <Input type="password" id="password" placeholder={lang === "EN" ? "Password" : "პაროლი"}/>
            </div>
            <a href='#' className={styles.forgotPassword}>{lang === "EN" ? "Forgot password" : "დაგავიწყდა პაროლი?"}</a>
            <button onClick="#">{lang === "EN" ? "Log In" : "შესვლა"}</button>
            <p>{lang === "EN" ? "Don't have an account?" : "არ გაქვს აქაუნთი?"} <a href='/register' className={styles.dontHaveAcc}>{lang === "EN" ? "Sign Up" : "შესვლა"}</a></p>
        </form>
      </div>
  )
}

export default LoginPage