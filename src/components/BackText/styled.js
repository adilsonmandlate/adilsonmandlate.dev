import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

export const Text = styled.h3`
  color: #1e1e1e;
  font-size: calc(80px + (1000 - 80) * (100vw - 400px) / (6400 - 400));
  font-weight: 800;
  text-transform: uppercase;
`;
