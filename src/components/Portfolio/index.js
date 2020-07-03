import React from "react";
import * as S from "./styled";
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
    <S.Container>
      <S.PageTitle>My projects</S.PageTitle>
      <S.TitleSeparator />
      <div style={{ paddingTop: "50px" }}>
        <ul>
          {edges.map((project, key) => {
            return <Project key={`project-${key}`} project={project.node} />;
          })}
        </ul>
      </div>
    </S.Container>
  );
};

export default Portfolio;
