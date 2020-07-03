import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 150px;
  }
`;

export const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 70px;
  color: #fff;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  @media (min-width: 800px) {
    padding-top: 0;
    padding-left: 20vw;
  }
`;
