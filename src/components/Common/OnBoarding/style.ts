import styled from 'styled-components';
import OnBoarding from 'src/assets/images/OnBoarding.svg';

export const OnBoardingContainer = styled.div`
  display: flex;

  height: 1720px;
  width: 100vw;
  background-image: url(${OnBoarding});
  background-repeat: no-repeat;
  background-size: cover;

  overflow: scroll;

  position: relative;
`;

export const ArrowButton = styled.img`
  width: 75px;
  height: 40px;

  position: absolute;
  left: 72%;
  top: 12%;

  z-index: 1;

  cursor: pointer;
`;

export const Button = styled.img`
  position: absolute;
  top: 94%;
  left: 2%;

  z-index: 1;

  cursor: pointer;
`;
