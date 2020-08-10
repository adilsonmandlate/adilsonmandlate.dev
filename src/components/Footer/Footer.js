import React from "react";
import styles from "./Footer.module.css";
import Contact from "../Contact";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Contact />
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} - Adilson Mandlate
      </p>
    </footer>
  );
};

export default Footer;
