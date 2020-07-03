import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #1f1f1f;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  font-size: calc(14px + (50 - 14) * (100vw - 400px) / (6400 - 400));

  @media (min-width: 800px) {
    height: 100vh;
    position: sticky;
    padding: 20px 0;
    box-shadow: none;
    background-color: transparent;
    flex-direction: column-reverse;
  }

  li {
    padding: 10px;
    align-self: center;
    text-transform: uppercase;
    color: #fff;

    @media (min-width: 800px) {
      transform: rotate(-90deg);
      padding: 30px;
    }
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

    &.active {
      color: #00bcd4;
    }

    &:hover,
    &.active {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;
