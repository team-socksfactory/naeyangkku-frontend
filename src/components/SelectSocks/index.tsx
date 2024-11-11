import React, { useState } from "react";
import * as S from "./style";
// import { useNavigate } from "react-router-dom";

const SelectSocks: React.FC = () => {
  const [selectedSocks, setSelectedSocks] = useState<number | null>(null);
  // const navigate = useNavigate();

  const socksComponents: JSX.Element[] = [
    <S.Socks1 />,
    <S.Socks2 />,
    <S.Socks3 />,
    <S.Socks4 />,
    <S.Socks5 />,
    <S.Socks6 />,
    <S.Socks7 />,
    <S.Socks8 />,
    <S.Socks9 />,
  ];

  const handleSocksClick = (index: number) => {
    setSelectedSocks(index);
  };

  // const handleNextClick = () => {
  //   if (selectedSocks !== null) {
  //     navigate("/");
  //   } else {
  //     alert("양말을 선택해주세요!");
  //   }
  // };

  // const handlePrevClick = () => {
  //   navigate(-1);
  // };

  return (
    <S.MainWrap>
      <S.TitleWrap>
        <S.PrevArrow />
        <div>
          <h1>양말을 선택해주세요!</h1>
        </div>
      </S.TitleWrap>
      <S.SelectedSocksWrap>
        {selectedSocks !== null && socksComponents[selectedSocks]}
      </S.SelectedSocksWrap>
      <S.SelectWrap>
        {Array.from({ length: 3 }, (_, index) => (
          <S.SocksWrap key={index}>
            {socksComponents
              .slice(index * 3, index * 3 + 3)
              .map((SocksComponent, idx) => (
                <S.SocksContainer
                  key={idx}
                  selected={selectedSocks === index * 3 + idx}
                  onClick={() => handleSocksClick(index * 3 + idx)}
                >
                  {SocksComponent}
                </S.SocksContainer>
              ))}
          </S.SocksWrap>
        ))}
        <S.Button>다음</S.Button>
      </S.SelectWrap>
    </S.MainWrap>
  );
};

export default SelectSocks;
