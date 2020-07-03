import styled from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div`
  padding: 3.125em 0;
`;

export const PageTitle = styled.h2`
  font-weight: 600;
  font-size: 2.7rem;

  @media (min-width: 800px) {
    font-size: 3.5rem;
  }
`;

export const TitleSeparator = styled.hr`
  border: none;
  height: 3px;
  background: #00bcd4;
  background: linear-gradient(
    270deg,
    rgba(31, 31, 31, 1) 0%,
    rgba(0, 188, 212, 1) 40%,
    rgba(31, 31, 31, 1) 115%
  );
`;

export const ProjectDetails = styled.li`
  margin: 0 0 80px;
  display: grid;
  gap: 50px;
  grid-template-rows: minmax(200px, auto) 1fr;

  @media (min-width: 1100px) {
    grid-template-rows: none;
    grid-template-columns: 320px 1fr;
  }
`;

export const ProjectImage = styled(Img)`
  max-width: 300px;
  justify-self: center;

  @media (min-width: 800px) {
    justify-self: left;
  }
`;

export const ProjectName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: justify;
`;
