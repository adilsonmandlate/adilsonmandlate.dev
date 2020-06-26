import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  width: 100vh;
  padding: 0 70px;
  transform: rotate(-90deg);

  li {
    margin: 10px;
    text-transform: uppercase;
  }

  a {
    position: relative;
    font-weight: 500;
    font-size: calc(14px + (80 - 14) * (100vw - 400px) / (6400 - 400));
    color: #fff;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 100%;
      width: 100%;
      height: 4px;
      transform: scaleX(0);
      background-color: #00bcd4;
      transition: transform 0.3s;
    }

    &:hover {
      &:before {
        transform: scaleX(1);
      }
    }
  }
`;
