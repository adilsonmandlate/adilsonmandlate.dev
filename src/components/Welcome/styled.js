import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: left;
`;

export const Greetings = styled.h1`
  color: #fff;
  font-size: calc(50px + (400 - 50) * (100vw - 400px) / (6400 - 400));
  font-weight: 700;
  line-height: calc(50px + (400 - 50) * (100vw - 400px) / (6400 - 400));
`;

export const Description = styled.div`
  color: #96979c;
  margin: 30px 0;
  font-weight: 300;
  font-size: calc(14px + (80 - 14) * (100vw - 400px) / (6400 - 400));
`;

export const Dot = styled.span`
  width: 1px;
  height: 1px;
  display: inline-block;
  border-radius: 50%;
  border: calc(5px + (30 - 5) * (100vw - 400px) / (6400 - 400)) solid #00bcd4;
`;

export const Comma = styled.span`
  color: #e74c3c;
`;
