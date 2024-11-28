import React, { useState } from "react";
import * as S from "./style";

const ProgressGraph = () => {
  return (
    <S.GraphWrap>
      <S.ProgressRate />
      <S.RateText>
        <span>30%</span>
      </S.RateText>
    </S.GraphWrap>
  );
};

export default ProgressGraph;
