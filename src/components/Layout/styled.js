import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const LayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  padding-left: 10vw;
  padding-right: 10vw;
  color: #fff;
  position: relative;
  z-index: 1;
  flex-grow: 5;

  /* @media (max-width: 480px) {
    padding: 70px 20px 0;
  }
*/
`;
