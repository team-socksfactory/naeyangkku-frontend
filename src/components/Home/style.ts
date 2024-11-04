import styled from "styled-components";
import BackgroundImage from "src/assets/images/background.png";
import { NaeYangKkuTheme } from "src/style/theme";

export const MainWrap = styled.div`
  width: calc(100vw - 76px);
  height: calc(100vh - 141px);

  display: flex;
  flex-direction: column;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;

  padding: 73px 38px 68px 38px;

  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  align-items: flex-start;

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

export const SocksWrap = styled.div`
  width: 100%;
  height: 70%;

  border: 1px solid #000;
`;

export const Button = styled.div`
  width: 100%;
  height: 8%;

  border: none;
  border-radius: 40px;
  background-color: ${NaeYangKkuTheme.secondlyNormal};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);

  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
