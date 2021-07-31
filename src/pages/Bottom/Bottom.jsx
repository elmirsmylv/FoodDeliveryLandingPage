import React from "react";
import styles from "./Bottom.module.scss";

export default function Bottom() {
  return (
    <div className={styles.container}>
      <h3>Download the app now</h3>
      <p className={styles.mobile_text}>
        Most calendars are designed for teams
      </p>
      <p className={styles.desktop_text}>
        Available on your favorite store. Start your premium experience now
      </p>
      <div className={styles.buttons}>
        <button className={styles.btn1}>Buy now</button>
        <button className={styles.btn2}>Try for free</button>
      </div>
    </div>
  );
}
