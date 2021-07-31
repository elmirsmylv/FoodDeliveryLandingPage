import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Header.module.scss";
import Phone from "../../assets/HeaderPhone.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <Navbar />
      <div className={styles.header_content}>
        <p className={styles.text1}>Food App</p>
        <h2>Why stay hungry when you can order form Bella Onojie</h2>
        <p className={styles.text2}>
          Download the bella onoje’s food app now on
        </p>

        <div className={styles.buttons}>
          <button className={styles.playstore}>Playstore</button>
          <button className={styles.appstore}>App store</button>
        </div>
        <img src={Phone} alt="Download Food App" />
      </div>
    </header>
  );
}
