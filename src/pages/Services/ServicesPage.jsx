import React from 'react'
import styles from './servicesPage.module.css'
import { Link } from 'react-router-dom'

function PricingPage() {
  return (
    <main>
      <div className={styles.contentWrapper}>
        <div className={styles.pricingTexts}>
          <h1>Our Pricing</h1>
          <p>Choose the plan that fits your needs.</p>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>For <span>Small</span> Businesess</h2>
              <p className={styles.cardPrice}>$6/employee</p>
            </div>
            <ul>
              <li>Up to 50 Employees <strong>✓</strong></li>
              <li>Personalised Agents <strong>✓</strong></li>
              <li>Weekly Skill reports <strong>-</strong></li>
              <li>Up to 50 Employees <strong>-</strong></li>
              <li>Personalised Agents <strong>-</strong></li>
              <li>Weekly Skill reports <strong>-</strong></li>
            </ul>
            <Link to="/signup" className={styles.signupButton}><button>Choose</button></Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>For <span>Medium</span> Businesses</h2>
              <p className={styles.cardPrice}>$19/employee</p>
            </div>
            <ul>
              <li>Up to 50 Employees <strong>✓</strong></li>
              <li>Personalised Agents <strong>✓</strong></li>
              <li>Weekly Skill reports <strong>✓</strong></li>
              <li>Up to 50 Employees <strong>✓</strong></li>
              <li>Personalised Agents <strong>-</strong></li>
              <li>Weekly Skill reports <strong>-</strong></li>
            </ul>
            <Link to="/signup" className={styles.signupButton}><button>Choose</button></Link>
          </div>
          <div className={styles.premiumCard}>
            <div className={styles.premiumCardContent}>
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>For <span>Large</span> Businesses</h2>
              <p className={styles.cardPrice}>$39/employee</p>
            </div>
            <ul>
              <li>Up to 50 Employees <strong>✓</strong></li>
              <li>Personalised Agents <strong>✓</strong></li>
              <li>Weekly Skill reports <strong>✓</strong></li>
              <li>Up to 50 Employees <strong>✓</strong></li>
              <li>Personalised Agents <strong>✓</strong></li>
              <li>Weekly Skill reports <strong>✓</strong></li>
            </ul>
            <Link to="/signup" className={styles.signupButton}><button>Choose</button></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PricingPage