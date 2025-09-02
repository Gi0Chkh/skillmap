import React from 'react'
import styles from './footer.module.css'
import { LanguageContext } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'

function Footer() {
    const {lang} = React.useContext(LanguageContext);
  return (
    <div>Footer</div>
  )
}

export default Footer