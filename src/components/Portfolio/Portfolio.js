import React from "react";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import { useStaticQuery, graphql } from "gatsby";

const Portfolio = () => {
  const projectsQuery = graphql`
    query {
      allProjectsYaml {
        edges {
          node {
            name
            description
            image {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `;

  const {
    allProjectsYaml: { edges },
  } = useStaticQuery(projectsQuery);

  return (
    <section className={styles.container}>
      <h2 className={styles.pageTitle}>My projects</h2>
      <hr className={styles.titleSeparator} />
      <div style={{ paddingTop: "50px" }}>
        <ul>
          {edges.map((project, key) => {
            return <Project key={`project-${key}`} project={project.node} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
