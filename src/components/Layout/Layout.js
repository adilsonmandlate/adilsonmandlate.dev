import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";

import "../../styles/global.css";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <div>{children}</div>
      <Footer />
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
