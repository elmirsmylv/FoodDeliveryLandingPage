import React from "react";
import styles from "./Footer.module.scss";
import NavLogo from "../../assets/NavLogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <img src={NavLogo} alt="Food delivery logo" className={styles.logo} />
      <div className={styles.socials}>
        <img src={twitter} alt="Twitter Logo" />
        <img src={facebook} alt="Facebook Logo" />
        <img src={instagram} alt="Instagram Logo" />
      </div>
      <p className={styles.desktop_text}>Copywright 2020 Bella Onojie.com</p>
      <p className={styles.mobile_text}>
        Just type what's on your mind and we'll{" "}
      </p>
    </footer>
  );
}
