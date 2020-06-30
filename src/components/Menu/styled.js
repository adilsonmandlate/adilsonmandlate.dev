import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 20px 0;
  font-size: calc(14px + (50 - 14) * (100vw - 400px) / (6400 - 400));

  li {
    padding: 30px;
    align-self: center;
    text-transform: uppercase;
    color: #fff;
    transform: rotate(-90deg);
  }

  a {
    position: relative;
    font-weight: 500;
    color: #fff;
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 100%;
      height: 2px;
      transform: scaleX(0);
      background-color: #00bcd4;
      transition: transform 0.3s;
    }

    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;
