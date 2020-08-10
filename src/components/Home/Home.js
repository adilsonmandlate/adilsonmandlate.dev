import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styles from "./Home.module.css";

const Home = () => {
  const imageQuery = graphql`
    query GetProfileImage {
      file(relativePath: { eq: "profile-bw.png" }) {
        childImageSharp {
          fixed(width: 140) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `;

  const {
    file: { childImageSharp },
  } = useStaticQuery(imageQuery);

  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.name}>
          Adilson Mandlate
          <Img className={styles.nameImg} fixed={childImageSharp.fixed} />
        </h1>
        <h1 className={styles.greetings}>
          Front End Developer
          <span className={styles.dot} />
        </h1>

        <p className={styles.description}>(Not) Your avarage developer</p>
      </div>
    </section>
  );
};

export default Home;
