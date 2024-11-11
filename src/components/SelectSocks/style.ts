import styled, { css } from "styled-components";
import { NaeYangKkuTheme } from "src/style/theme";
import PrevArrowImage from "src/assets/images/prevArrow.svg";
import Socks1Image from "src/assets/images/socks1.svg";
import Socks2Image from "src/assets/images/socks2.svg";
import Socks3Image from "src/assets/images/socks3.svg";
import Socks4Image from "src/assets/images/socks4.svg";
import Socks5Image from "src/assets/images/socks5.svg";
import Socks6Image from "src/assets/images/socks6.svg";
import Socks7Image from "src/assets/images/socks7.svg";
import Socks8Image from "src/assets/images/socks8.svg";
import Socks9Image from "src/assets/images/socks9.svg";

export const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${NaeYangKkuTheme.primaryNormal};
  background-size: cover;

  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 393px) {
    background-size: contain;
  }
`;

export const PrevArrow = styled.img.attrs({
  src: PrevArrowImage,
})`
  width: 2vh;
  height: 2vh;

  position: absolute;

  top: 4%;
  left: 2%;

  @media (max-width: 393px) {
    width: 3vh;
    height: 2vh;
    top: 5%;
    left: 7%;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  align-items: flex-start;

  padding: 80px 38px 0 38px;

  h1 {
    color: #fff;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  span {
    color: #fff;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    font-family: Pretendard;
  }
`;

export const SelectedSocksWrap = styled.div`
  width: calc(100vw - 76px);
  height: 48%;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  img {
    width: 25vh;
    height: 25vh;
  }
`;

export const Button = styled.div`
  width: 30%;
  height: 12%;

  border: none;
  border-radius: 40px;
  background-color: ${NaeYangKkuTheme.white};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);

  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-top: auto;
  margin-bottom: 40px;

  @media (max-width: 393px) {
    width: 84%;
    height: 12%;
  }
`;

export const SelectWrap = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px 30px 0 0;
  background-color: ${NaeYangKkuTheme.primaryStrong};

  flex-direction: column;
`;

export const SocksWrap = styled.div`
  display: flex;

  gap: 16px;

  padding-top: 16px;
`;

interface SocksContainerProps {
  selected: boolean;
}

export const SocksContainer = styled.div<SocksContainerProps>`
  width: 8vw;
  height: 8vw;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${NaeYangKkuTheme.primaryNormal};

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: inset 0 0 0 2px white;
    `}

  @media (max-width: 393px) {
    width: 24vw;
    height: 24vw;
  }
`;

export const Socks1 = styled.img.attrs({
  src: Socks1Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;
  padding: 4px;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks2 = styled.img.attrs({
  src: Socks2Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks3 = styled.img.attrs({
  src: Socks3Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks4 = styled.img.attrs({
  src: Socks4Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks5 = styled.img.attrs({
  src: Socks5Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks6 = styled.img.attrs({
  src: Socks6Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks7 = styled.img.attrs({
  src: Socks7Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;
export const Socks8 = styled.img.attrs({
  src: Socks8Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;

export const Socks9 = styled.img.attrs({
  src: Socks9Image,
})`
  width: 12vh;
  height: 12vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 11vh;
    height: 11vh;
  }
`;
