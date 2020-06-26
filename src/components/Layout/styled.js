import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 100px;
`;

export const LayoutMain = styled.main`
  margin: auto;
  padding-left: 20vw;
  padding-right: 80px;
  color: #fff;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;
