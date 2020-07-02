import styled from "styled-components";
import Img from "gatsby-image";

export const Container = styled.div`
  padding: 3.125em 0;
`;

export const PageTitle = styled.h2`
  font-weight: 600;
  font-size: calc(10px + (200 - 10) * (100vw - 200px) / (6400 - 200));
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
  grid-template-columns: 320px 1fr;
`;

export const ProjectImage = styled(Img)`
  max-width: 300px;
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
