import React from "react";
import styles from "./aboutUsPage.module.css";

function AboutUs() {
  return (
    <main>
      <section className={styles.teamSection}>
        <h1>Our Team</h1>
        <div className={styles.peopleCards}>
          <div className={styles.personCard}>
            <div className={styles.circle}>
              <img src="/public/People/Person.png" alt="perosn" />
            </div>
            <h2 className={styles.name}>Nika</h2>
          </div>
          <div className={styles.personCard}>
            <div className={styles.circle}>
              <img src="/public/People/Person.png" alt="perosn" />
            </div>
            <h2 className={styles.name}>Gio</h2>
          </div>
          <div className={styles.personCard}>
            <div className={styles.circle}>
              <img src="/public/People/Person.png" alt="perosn" />
            </div>
            <h2 className={styles.name}>Marika</h2>
          </div>
          <div className={styles.personCard}>
            <div className={styles.circle}>
              <img src="/public/People/Person.png" alt="perosn" />
            </div>
            <h2 className={styles.name}>Temo</h2>
          </div>
          <div className={styles.personCard}>
            <div className={styles.circle}>
              <img src="/public/People/Person.png" alt="perosn" />
            </div>
            <h2 className={styles.name}>Iako</h2>
          </div>
          </div>
      </section>
      <section className={styles.howItWorks}>
        <h1>How It Works?</h1>
        
      </section>
    </main>
  );
}

export default AboutUs;
