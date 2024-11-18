import React, { useState } from "react";
import * as S from "./style";
import { NaeYangKkuTheme } from "src/style/theme";
import { useNavigate } from "react-router-dom";

const DecorativePage = () => {
  const [selectedDecoration, setSelectedDecoration] = useState<number | null>(
    null
  );
  const navigate = useNavigate();

  const ornamentsComponents: JSX.Element[] = [
    <S.Ornament1 />,
    <S.Ornament2 />,
    <S.Ornament3 />,
    <S.Ornament4 />,
    <S.Ornament5 />,
    <S.Ornament6 />,
    <S.Ornament7 />,
    <S.Ornament8 />,
    <S.Ornament9 />,
  ];

  const handleDecorationClick = (index: number) => {
    setSelectedDecoration(index);
  };

  const handleNextClick = () => {
    if (selectedDecoration !== null) {
      navigate("/");
    } else {
      alert("장식을 선택해주세요!");
    }
  };

  return (
    <S.MainWrap>
      <S.TitleWrap>
        <div>
          <h1 style={{ color: `${NaeYangKkuTheme.white}` }}>
            장식을 선택해주세요
          </h1>
        </div>
      </S.TitleWrap>
      <S.OrnamentWrap>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <S.OrnamentRow key={rowIndex}>
            {ornamentsComponents
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((OrnamentComponent, idx) => (
                <S.OrnamentContainer
                  key={idx}
                  selected={selectedDecoration === rowIndex * 3 + idx}
                  onClick={() => handleDecorationClick(rowIndex * 3 + idx)}
                >
                  {OrnamentComponent}
                </S.OrnamentContainer>
              ))}
          </S.OrnamentRow>
        ))}
      </S.OrnamentWrap>

      <S.Button onClick={handleNextClick}>다음</S.Button>
    </S.MainWrap>
  );
};

export default DecorativePage;
