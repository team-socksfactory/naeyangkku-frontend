import styled from 'styled-components';
import OnBoarding from 'src/assets/images/OnBoarding.svg';

export const OnBoardingContainer = styled.div`
  display: flex;

  height: 1720px;
  width: 100vw;
  background-image: url(${OnBoarding});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  overflow: scroll;

  @media (min-width: 1170px) {
    width: 1200px;
    height: 5000px;
    background-image: url(${OnBoarding});
    background-size: cover;

    overflow: scroll;
  }

  @media (min-width: 1080px) {
    width: 100vw;
    height: 4700px;
    background-image: url(${OnBoarding});
    background-size: cover;

    overflow: scroll;
  }
`;

export const ArrowButton = styled.img`
  width: 75px;
  height: 40px;

  position: absolute;
  left: 72%;
  top: 12%;

  z-index: 1;

  cursor: pointer;

  @media (min-width: 1170px) {
    width: 200px;
    height: 150px;
    left: 73%;
    top: 20%;
  }

  @media (min-width: 1080px) {
    width: 200px;
    height: 150px;
    left: 73%;
    top: 20%;
  }
`;

export const Button = styled.img`
  position: absolute;
  top: 94%;
  left: 2%;

  z-index: 1;

  cursor: pointer;

  @media (min-width: 1170px) {
    top: 100%;
    left: 2%;

    width: 100%;

    z-index: 1;

    padding-top: 180%;
  }

  @media (min-width: 1080px) {
    top: 100%;
    left: 2%;

    width: 100%;

    z-index: 1;

    padding-top: 180%;
  }
`;
