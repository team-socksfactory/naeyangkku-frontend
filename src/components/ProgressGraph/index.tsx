import React, { useState } from 'react';
import * as S from './style';

interface ProgressGraphProps {
  progress: number;
}

const ProgressGraph = ({ progress }: ProgressGraphProps) => {
  return (
    <S.GraphWrap>
      <S.ProgressRate style={{ width: `${progress}%` }} />
      <S.RateText>
        <span>{progress}%</span>
      </S.RateText>
    </S.GraphWrap>
  );
};

export default ProgressGraph;
