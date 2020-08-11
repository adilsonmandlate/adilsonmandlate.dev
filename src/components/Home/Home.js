import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./Home.module.css";

const Home = () => {
  const imageQuery = graphql`
    query GetProfileImage {
      file(relativePath: { eq: "profile-bw.png" }) {
        childImageSharp {
          fixed(width: 100) {
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
          <Img className={styles.nameImg} fixed={childImageSharp.fixed} />
          Adilson Mandlate
        </h1>
        <h1 className={styles.greetings}>
          Front End Developer
          <span className={styles.dot} />
        </h1>

        <Link to={"/work"} className={styles.link}>
          Check my work
        </Link>
      </div>
    </section>
  );
};

export default Home;
