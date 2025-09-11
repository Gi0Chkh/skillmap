import React from "react";
import styles from "./profilePage.module.css";
import RadarStats from "../../components/Radar/RadarStats";
import Pie from "../../components/Pie/pie";

function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <RadarStats />
      </div>
      <div className={styles.card}>
        <Pie />
      </div>
    </div>
  );
}

export default ProfilePage;
