import React from "react";
import * as S from "./style";

const SelectSocks = () => {
  return (
    <S.MainWrap>
      <S.TitleWrap>
        <S.PrevArrow />
        <div>
          <h1>양말을 선택해주세요!</h1>
        </div>
      </S.TitleWrap>
      <S.SelectedSocksWrap></S.SelectedSocksWrap>
      <S.SelectWrap>
        <S.SocksWrap>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
        </S.SocksWrap>
        <S.SocksWrap>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
        </S.SocksWrap>
        <S.SocksWrap>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
          <S.SocksContainer></S.SocksContainer>
        </S.SocksWrap>
        <S.Button>다음</S.Button>
      </S.SelectWrap>
    </S.MainWrap>
  );
};

export default SelectSocks;
