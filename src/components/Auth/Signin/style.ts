import { NaeYangKkuTheme } from 'src/style/theme';
import styled from 'styled-components';

export const SigninWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: #f8eddf;
`;

export const TitleWrap = styled.div`
  width: 80%;
  height: 7%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;

  h1 {
    color: ${NaeYangKkuTheme.primaryNormal};
    font-family: 'GangwonEduPower';
    font-size: 28px;
    font-weight: 400;
    line-height: 22px; /* 78.571% */
    margin-block-start: 0;
    margin-block-end: 0;
  }

  span {
    color: ${NaeYangKkuTheme.primaryNormal};
    font-family: 'GangwonEduSaeeum';
    font-size: 20px;
    font-weight: 400;
    line-height: 22px; /* 110% */
  }

  img {
    position: absolute;
    top: -20%;
    left: 45%;

    @media (max-width: 393px) {
      top: -25%;
      left: 28%;
    }
  }
`;

export const SignWrap = styled.div`
  width: 90%;
  height: 50%;

  display: flex;
  flex-direction: column;
`;

export const MenuSelectWrap = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
`;

export const Menu = styled.div<{ isSelected: boolean }>`
  width: 50%;
  height: 100%;

  background-color: ${({ isSelected }) => (!isSelected ? NaeYangKkuTheme.white : NaeYangKkuTheme.backgroundNormal)};

  border: none;
  border-radius: ${({ isSelected }) => (!isSelected ? '24px 24px 0px 0px' : '24px 24px 0px 12px')};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ isSelected }) => (!isSelected ? '#121212' : NaeYangKkuTheme.white)};
    font-family: 'GangwonEduSaeeum';
    font-size: 24px;
    font-weight: 400;
    line-height: 22px; /* 91.667% */
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 85%;

  border: none;
  border-radius: 0px 0px 30px 30px;

  background-color: ${NaeYangKkuTheme.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 90%;
    height: 25%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    span {
      color: #121212;
      font-family: 'GangwonEduSaeeum';
      font-size: 20px;
      font-weight: 400;
      line-height: 22px; /* 110% */
    }

    input {
      width: calc(100% - 32px);
      height: calc(50% - 20px);

      padding: 10px 16px;

      color: #000;
      font-family: 'GangwonEduSaeeum';
      font-size: 20px;
      font-weight: 400;
      line-height: 22px; /* 110% */

      border-radius: 12px;
      border: 0.4px solid #d9d9d9;
      background: #f5f5f5;

      &::placeholder {
        color: #9b9b9b;
        font-size: 20px;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 7%;

  background-color: ${NaeYangKkuTheme.secondlyNormal};
  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);

  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px; /* 110% */

  cursor: pointer;
`;
