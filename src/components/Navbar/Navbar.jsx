import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Navbar.module.scss";
import NavLogo from "../../assets/NavLogo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { BiMenu } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    maxWidth: "120rem",
    marginInline: "auto",
  },
  toolbar: {
    paddingBlock: "0.7rem",
  },
  image: {
    width: "200px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar className={classes.root} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <img className={styles.logo} src={NavLogo} alt="Navbar Logo" />
        <BiMenu
          onClick={() => setIsOpen(!isOpen)}
          className={styles.hamburger_menu}
        />
        <div className={styles.desktop_nav}>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={isOpen ? styles.mobile_active : styles.mobile_nav}>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
}
