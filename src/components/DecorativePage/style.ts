import styled from "styled-components";
import { NaeYangKkuTheme } from "src/style/theme";
import Ornament1Image from "src/assets/images/Ornament1.svg";
import Ornament2Image from "src/assets/images/Ornament2.svg";
import Ornament3Image from "src/assets/images/Ornament3.svg";
import Ornament4Image from "src/assets/images/Ornament4.svg";
import Ornament5Image from "src/assets/images/Ornament5.svg";
import Ornament6Image from "src/assets/images/Ornament6.svg";
import Ornament7Image from "src/assets/images/Ornament7.svg";
import Ornament8Image from "src/assets/images/Ornament8.svg";
import Ornament9Image from "src/assets/images/Ornament9.svg";

export const MainWrap = styled.div`
  width: calc(100vw - 76px);
  height: calc(100vh - 141px);

  display: flex;
  flex-direction: column;

  background-color: ${NaeYangKkuTheme.primaryNormal};

  padding: 73px 38px 68px 38px;

  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 393px) {
    background-size: contain;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  align-items: flex-start;

  h1 {
    font-family: "GangwonEdu Modu";
    color: #fff;
    font-size: 27px;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: 6vh;
  }
`;

export const OrnamentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-top: 12px;
  margin-bottom: auto;
`;

export const OrnamentRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const OrnamentContainer = styled.div<{ selected: boolean }>`
  width: 12vh;
  height: 13vh;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: #ffffff40;
  border: 1px solid #ffffff1a;
  box-sizing: border-box;

  position: relative;

  ${({ selected }) =>
    selected &&
    `
    background-color: #ffffffB3;
    box-shadow: inset 0 0 0 2px ${NaeYangKkuTheme.white};
  `}

  @media (max-width: 393px) {
    width: 11vh;
    height: 13vh;
  }
`;

export const Button = styled.div`
  width: 30%;
  height: 8%;

  border: none;
  border-radius: 40px;
  background-color: #776f6b;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);

  color: #fff;
  font-family: "GangwonEduPower";
  font-size: 18px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;

  margin-top: auto;

  @media (max-width: 393px) {
    width: 100%;
    height: 8%;
  }
`;

export const Ornament1 = styled.img.attrs({
  src: Ornament1Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament2 = styled.img.attrs({
  src: Ornament2Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament3 = styled.img.attrs({
  src: Ornament3Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament4 = styled.img.attrs({
  src: Ornament4Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament5 = styled.img.attrs({
  src: Ornament5Image,
})`
  width: 10vh;
  height: 10vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 10vh;
    height: 10vh;
  }
`;

export const Ornament6 = styled.img.attrs({
  src: Ornament6Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament7 = styled.img.attrs({
  src: Ornament7Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament8 = styled.img.attrs({
  src: Ornament8Image,
})`
  width: 9vh;
  height: 9vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 9vh;
    height: 9vh;
  }
`;

export const Ornament9 = styled.img.attrs({
  src: Ornament9Image,
})`
  width: 8vh;
  height: 8vh;

  position: absolute;

  @media (max-width: 393px) {
    width: 8vh;
    height: 8vh;
  }
`;
