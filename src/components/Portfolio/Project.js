import React from "react";
import Img from "gatsby-image";
import styles from "./Portfolio.module.css";

const Project = ({ project }) => {
  return (
    <li className={styles.projectDetails}>
      <Img
        className={styles.projectImage}
        fixed={project.image.childImageSharp.fixed}
      />
      <section>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p classNAme={styles.projectDesciption}>{project.description}</p>
      </section>
    </li>
  );
};

export default Project;
