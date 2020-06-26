import styled from "styled-components";

export const LayoutWrapper = styled.section`
  /* display: flex;
  width: 100%; */
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
`;

export const LayoutMain = styled.main`
  margin: auto;
  padding-left: 20vw;
  padding-right: 80px;
  color: #fff;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;
