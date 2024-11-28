import React from 'react';
import * as S from './style';
import ArrowButton from 'src/assets/images/Group 36.svg';
import Button from 'src/assets/images/Frame 3.svg';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const navigate = useNavigate();
  return (
    <S.OnBoardingContainer>
      <S.ArrowButton src={ArrowButton} onClick={() => navigate('/sign')} />
      <S.Button src={Button} onClick={() => navigate('/sign')} />
    </S.OnBoardingContainer>
  );
};

export default OnBoarding;
