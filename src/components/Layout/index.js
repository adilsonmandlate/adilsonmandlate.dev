import React from "react";
import PropTypes from "prop-types";
import BackText from "../BackText";
import * as S from "./styled";
import GlobalStyles from "../../styles/global";

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <BackText />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
