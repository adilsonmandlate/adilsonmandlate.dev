import React from "react";
import * as S from "./styled";

const Contact = () => {
  return (
    <S.ContactContainer>
      <div>
        <S.Label>Email</S.Label>
        <S.Email href="mailto: adilsonmandlate@gmail.com">
          adilsonmandlate@gmail.com
        </S.Email>
      </div>
    </S.ContactContainer>
  );
};

export default Contact;
