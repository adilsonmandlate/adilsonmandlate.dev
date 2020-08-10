import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 0 0 10px 0;
  font-size: calc(10px + (50 - 10) * (100vw - 400px) / (6400 - 400));
`;

export const Label = styled.p`
  font-weight: 600;
  padding: 20px 0;
  text-transform: uppercase;
`;

export const Email = styled.a`
  color: #fff;
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 100%;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    background-color: #00bcd4;
    transition: transform 0.3s;
  }

  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`;
