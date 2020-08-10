import React from "react";
import styles from "./Home.module.css";

const WelcomeInfo = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.greetings}>
          Hi<span className={styles.comma}>,</span>
        </h1>
        <h1 className={styles.greetings}>
          I'm Adilson Mandlate
          <span className={styles.dot} />
        </h1>
        <p className={styles.description}>
          A front-end developer based in Mozambique
        </p>
      </div>
    </section>
  );
};

export default WelcomeInfo;
