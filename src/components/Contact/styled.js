import styled from "styled-components";
import { Mail } from "styled-icons/typicons/Mail";

export const MailIcon = styled(Mail)`
  color: #fff;
  position: fixed;
  bottom: 2vw;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e74c3c;
  }
`;
