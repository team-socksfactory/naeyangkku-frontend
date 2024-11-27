import styled, { css } from 'styled-components';
import MobileBackgroundImage from 'src/assets/images/mobileBackground.svg';
import DesktopBackgroundImage from 'src/assets/images/desktopBackground.png';
import { NaeYangKkuTheme } from 'src/style/theme';

export const MainWrap = styled.div<{ isOpen: boolean }>`
  width: calc(100vw - 76px);
  height: calc(100vh - 141px);

  display: flex;
  flex-direction: column;

  background-image: url(${DesktopBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 73px 38px 68px 38px;

  justify-content: space-evenly;
  gap: 20px;

  p {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'GangwonEdu Modu';
    font-size: 13px;
    font-weight: 400;
    line-height: 22px; /* 169.231% */
  }

  @media (max-width: 393px) {
    background-image: url(${MobileBackgroundImage});
    background-size: contain;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  align-items: flex-start;

  h1 {
    color: #fff;
    font-family: 'GangwonEduSaeeum';
    font-size: 32px;
    font-weight: 400;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 22px;
  }
`;

export const letterCountSpan = styled.span`
  color: #fff;
  font-family: 'GangwonEduSaeeum';
  font-size: 28px;
  font-weight: 400;
  width: 200px;
`;

export const SocksWrap = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid #000;
  position: relative;
`;

export const IconWrap = styled.div`
  position: absolute;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    .shadow {
      position: absolute;
      top: 70%;
      left: 5%;
    }

    span {
      color: #fff;
      text-align: center;
      font-family: 'GangwonEduSaeeum';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 122.222% */
    }
  }
`;

export const Button = styled.div<{ isOwner: boolean }>`
  width: 30%;
  height: 8%;

  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);

  background-color: ${({ isOwner }) => (isOwner ? '#776F6B' : NaeYangKkuTheme.secondlyNormal)};

  color: #fff;
  font-family: 'GangwonEduPower';
  font-size: 18px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  line-height: 22px;

  cursor: pointer;

  @media (max-width: 393px) {
    width: 100%;
    height: 8%;
  }
`;
