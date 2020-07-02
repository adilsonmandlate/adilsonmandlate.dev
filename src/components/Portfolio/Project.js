import React from "react";
import * as S from "./styled";

const Project = ({ project }) => {
  return (
    <S.ProjectDetails>
      <S.ProjectImage fixed={project.image.childImageSharp.fixed} />
      <div>
        <S.ProjectName>{project.name}</S.ProjectName>
        <S.ProjectDescription>{project.description}</S.ProjectDescription>
      </div>
    </S.ProjectDetails>
  );
};

export default Project;
