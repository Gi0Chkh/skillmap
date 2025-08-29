import React from 'react'
import styles from './registrationPage.module.css'

function RegistrationPage() {
  return (
      <div class = {styles.login_box}>
        <h2>Registration</h2>
        <img src="/public/skillMap Icon.svg" alt="skillMap icon" className={styles.icon} />
        <form>
            <div class = {styles.user_box}>
                <input type="text"/>
                <label for="username">User</label>
            </div>
            <div class = {styles.user_box}>
                <input type="password" id="password"/>
                <label for="password">Password</label>
            </div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
        </form>
      </div>
  )
}

export default RegistrationPage