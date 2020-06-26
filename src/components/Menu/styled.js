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
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }
`;
