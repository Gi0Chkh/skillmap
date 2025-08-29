import React from 'react'
import styles from './loginPage.module.css'

function LoginPage() {
  return (
      <div class = {styles.login_box}>
        <h2>Login</h2>
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

export default LoginPage