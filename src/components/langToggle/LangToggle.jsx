import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import styles from './langToggle.module.css'

function LangToggle() {
    const [drop, setDrop] = useState(styles.noDisplay);
    const {setLang, lang} = useContext(LanguageContext);


    const handleDropdown = () => {
        if (drop === styles.noDisplay) {
            setDrop(styles.languages);
        }
        else {
            setDrop(styles.noDisplay);
        }
    }

    const handleKAClick = () => {
        setLang("KA");
        setDrop(styles.noDisplay);
    }
    const handleENClick = () => {
        setLang("EN");
        setDrop(styles.noDisplay);
    }

  return (
    <div className={styles.dropdown}>
        <button onClick={handleDropdown} className={styles.dropBtn}>{lang === "EN" ? "English" : "ქართული"}</button>
        <div className={drop}>
            <button onClick={handleKAClick}>KA</button>
            <button onClick={handleENClick}>EN</button>
        </div>

    </div>
  )
}

export default LangToggle