import React from "react";
import styles from "./Hero2.module.scss";

export default function Hero({ text, title, subtitle, img }) {
  return (
    <div className={styles.container}>
      <div className={styles.title_section}>
        <p className={styles.text}>{text}</p>
        <h2>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <img src={img} alt="Food Delivery" />
    </div>
  );
}
