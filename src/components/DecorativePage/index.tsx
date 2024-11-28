import React, { useState } from 'react';
import * as S from './style';
import { NaeYangKkuTheme } from 'src/style/theme';
import { useNavigate, useParams } from 'react-router-dom';
import ProgressGraph from '../ProgressGraph';
import toast, { Toaster } from 'react-hot-toast';
import { writeStore } from 'src/stores/write/write.store';

const DecorativePage = () => {
  const [selectedDecoration, setSelectedDecoration] = useState<number | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const setIconId = writeStore((state) => state.setIconId);

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
    setSelectedDecoration(index + 1); // 인덱스에 1을 더해서 저장
    setIconId(index + 1);
  };

  const handleNextClick = () => {
    if (selectedDecoration !== null) {
      navigate(`/write/${id}`);
    } else {
      toast.error('장식을 선택해주세요!');
    }
  };

  return (
    <S.MainWrap>
      <ProgressGraph />
      <S.TitleWrap>
        <div>
          <h1 style={{ color: `${NaeYangKkuTheme.white}` }}>장식을 선택해주세요</h1>
        </div>
      </S.TitleWrap>
      <S.OrnamentWrap>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <S.OrnamentRow key={rowIndex}>
            {ornamentsComponents.slice(rowIndex * 3, rowIndex * 3 + 3).map((OrnamentComponent, idx) => (
              <S.OrnamentContainer
                key={idx}
                selected={selectedDecoration === rowIndex * 3 + idx + 1} // 여기도 인덱스 + 1 확인
                onClick={() => handleDecorationClick(rowIndex * 3 + idx)} // 클릭 시 인덱스 전달
              >
                {OrnamentComponent}
              </S.OrnamentContainer>
            ))}
          </S.OrnamentRow>
        ))}
      </S.OrnamentWrap>

      <S.Button onClick={handleNextClick}>다음</S.Button>
      <Toaster />
    </S.MainWrap>
  );
};

export default DecorativePage;
