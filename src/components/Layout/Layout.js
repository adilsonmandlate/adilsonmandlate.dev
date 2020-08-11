import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import GlobalStyles from "../../styles/global";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <GlobalStyles />
      <div className={styles.main}>{children}</div>
      <Footer />
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
