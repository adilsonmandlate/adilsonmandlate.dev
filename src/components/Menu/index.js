import React from "react";
import * as S from "./styled";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <S.Container>
      <li>
        <Link to="/work">Home</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
    </S.Container>
  );
};

export default Menu;
