import React, { useState, useContext, useRef } from "react";
import styles from './registrationPage.module.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LanguageContext } from "../../context/LanguageContext";

function RegistrationPage() {
  const { lang } = useContext(LanguageContext);
  return (
      <div class = {styles.registration_box}>
        <img src="/public/skillMap Icon.svg" alt="skillMap icon" className={styles.icon} />
        <form>
            <div class = {styles.user_box}>
                <Input type="text" placeholder={lang === "EN" ? "Email" : "შესვლა"}/>
            </div>
            <div class = {styles.user_box}>
                <Input type="password" id="password" placeholder={lang === "EN" ? "Password" : "პაროლი"}/>
            </div>
            <Button clickEvent="#" text={lang === "EN" ? "Sign up" : "დარეგისტრირდი"}/>
            <p>
              {lang === "EN" ? "Already have an account?" : "უკვე გაქვს აქაუნთი?"} <a href='/login' className={styles.dontHaveAcc}>
              {lang === "EN" ? "Sign In" : "შესვლა"}</a>
            </p>
        </form>
      </div>
  )
}

export default RegistrationPage