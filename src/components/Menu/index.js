import React from "react";
import * as S from "./styled";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <S.Container>
      <li>
        <Link activeClassName={"active"} to="/">
          Yo!
        </Link>
      </li>
      <li>
        <Link activeClassName={"active"} to="/work">
          Work
        </Link>
      </li>
    </S.Container>
  );
};

export default Menu;
