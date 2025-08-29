import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import styles from './langToggle.module.css'

function LangToggle() {
    const {setLang, lang} = useContext(LanguageContext);


    const changeLanguage = () => {
        if (lang === "KA") {
            setLang("EN");
        }
        else {
            setLang("KA");
        }
    }

  return (
    <div className={styles.dropdown}>
        <button onClick={changeLanguage} className={styles.dropBtn}>{lang === "EN" ? "English" : "ქართული"}</button>
    </div>
  )
}

export default LangToggle