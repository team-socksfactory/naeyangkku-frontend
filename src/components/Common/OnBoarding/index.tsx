import React from 'react';
import * as S from './style';
import ArrowButton from 'src/assets/images/Group 36.svg';
import Button from 'src/assets/images/Frame 3.svg';

const OnBoarding = () => {
  return (
    <S.OnBoardingContainer>
      <S.ArrowButton src={ArrowButton} />
      <S.Button src={Button} />
    </S.OnBoardingContainer>
  );
};

export default OnBoarding;
