import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.email} href="mailto: adilsonmandlate@gmail.com">
          adilsonmandlate@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
