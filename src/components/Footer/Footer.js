import React from "react";
import styles from "./Footer.module.css";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Contact />
    </footer>
  );
};

export default Footer;
