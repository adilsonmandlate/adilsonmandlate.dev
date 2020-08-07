import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-grow: 10;
  align-items: center;
  justify-content: left;
`;

export const Greetings = styled.h1`
  color: #fff;
  font-size: calc(60px + (280 - 60) * (100vw - 280px) / (6400 - 280));
  font-weight: 600;
`;

export const Description = styled.p`
  color: #96979c;
  margin: 30px 0;
  font-weight: 300;
  font-size: calc(10px + (120 - 10) * (100vw - 120px) / (6400 - 120));
`;

export const Dot = styled.span`
  width: 1px;
  height: 1px;
  display: inline-block;
  border-radius: 50%;
  border: calc(5px + (30 - 5) * (100vw - 30px) / (6400 - 30)) solid #00bcd4;
  /** TODO: Find a better solution/idea for this */
  @media (max-width: 520px) {
    display: none;
  }
`;

export const Comma = styled.span`
  color: #e74c3c;
`;
