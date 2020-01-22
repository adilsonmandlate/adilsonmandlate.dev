import React from "react";
import * as S from "./styled";

const WelcomeInfo = () => {
  return (
    <S.Container>
      <div>
        <S.Greetings>Hi,</S.Greetings>
        <S.Greetings>
          I'm Adilson Mandlate
          <S.Dot />
        </S.Greetings>
        <S.Description>A front-end developer based in Mozambique</S.Description>
      </div>
    </S.Container>
  );
};

export default WelcomeInfo;
