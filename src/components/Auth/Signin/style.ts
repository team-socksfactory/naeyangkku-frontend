import { NaeYangKkuTheme } from 'src/style/theme';
import styled from 'styled-components';

export const SigninWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 10vh);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;

  background: #fdedee;
  padding-top: 10vh;

  @media (min-width: 1170px) {
    padding-top: 15vh;
    height: calc(100vh - 15vh);
    gap: 70px;
  }

  @media (min-width: 1242px) {
    padding-top: 13vh;
    height: calc(100vh - 13vh);
    gap: 55px;
  }

  @media (min-width: 1080px) {
    padding-top: 17vh;
    height: calc(100vh - 17vh);
    gap: 55px;
  }
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
    margin-block-start: 0;
    margin-block-end: 0;
  }

  span {
    color: ${NaeYangKkuTheme.primaryNormal};
    font-family: 'GangwonEduSaeeum';
    font-size: 20px;
    font-weight: 400;
  }

  img {
    position: absolute;
    top: -20%;
    left: 45%;
  }

  @media (min-width: 1170px) {
    h1 {
      font-size: 76px;
    }

    span {
      font-size: 60px;
    }

    img {
      width: 80px !important;
      height: 80px !important;
      position: absolute;
      left: 29%;
      top: -24%;
    }
  }

  @media (min-width: 1242px) {
    img {
      width: 70px !important;
      height: 70px !important;
      position: absolute;
      left: 31%;
      top: -24%;
    }
  }

  @media (min-width: 1080px) {
    h1 {
      font-size: 78px;
    }

    span {
      font-size: 58px;
    }

    img {
      width: 80px !important;
      height: 80px !important;
      position: absolute;
      left: 27%;
      top: -27%;
    }
  }
`;

export const SignWrap = styled.div`
  width: 90%;
  height: 55%;

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

  background-color: ${({ isSelected }) => (isSelected ? NaeYangKkuTheme.white : NaeYangKkuTheme.backgroundNormal)};

  border: none;
  border-radius: ${({ isSelected }) => (isSelected ? '24px 24px 0px 0px' : '24px 24px 0px 12px')};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ isSelected }) => (isSelected ? '#121212' : NaeYangKkuTheme.white)};
    font-family: 'GangwonEduSaeeum';
    font-size: 24px;
    font-weight: 400;
    line-height: 22px; /* 91.667% */
  }

  @media (min-width: 1170px) {
    border-radius: ${({ isSelected }) => (isSelected ? '50px 50px 0px 0px' : '50px 50px 0px 12px')};
    span {
      font-size: 60px;
    }
  }

  @media (min-width: 1080px) {
    border-radius: ${({ isSelected }) => (isSelected ? '50px 50px 0px 0px' : '50px 50px 0px 12px')};
    span {
      font-size: 55px;
    }
  }
`;

export const InputWrap = styled.div<{ menu: '회원가입' | '로그인' }>`
  width: 100%;
  height: 85%;

  border: none;
  border-radius: 0px 0px 30px 30px;

  background-color: ${NaeYangKkuTheme.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ menu }) => (menu === '로그인' ? 'center' : 'space-evenly')};

  div {
    width: 90%;
    height: 25%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    span {
      color: #121212;
      font-family: 'GangwonEduSaeeum';
      font-size: 20px;
      font-weight: 400;
    }

    input {
      width: calc(100% - 32px);
      height: calc(50% - 20px);

      padding: 10px 16px;

      color: #000;
      font-family: 'GangwonEduSaeeum';
      font-size: 20px;
      font-weight: 400;

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

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #fff inset;
        -webkit-text-fill-color: #000;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }

  @media (min-width: 1170px) {
    border-radius: 0px 0px 50px 50px;

    div {
      gap: 30px;

      span {
        font-size: 60px;
      }

      input {
        width: calc(100% - 64px);
        height: calc(50% - 20px);

        padding: 10px 32px;
        font-size: 60px;

        border-width: 2px;
        border-radius: 30px;

        &::placeholder {
          font-size: 60px;
        }
      }
    }
  }

  @media (min-width: 1080px) {
    div {
      gap: 20px;

      span {
        font-size: 55px;
      }

      input {
        width: calc(100% - 64px);
        height: calc(50% - 20px);

        padding: 10px 32px;
        font-size: 55px;

        border-width: 2px;
        border-radius: 30px;

        &::placeholder {
          font-size: 55px;
        }
      }
    }
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media (min-width: 1170px) {
    gap: 35px;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 40%;

  background-color: ${NaeYangKkuTheme.secondlyNormal};
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.6);

  color: #fff;
  font-family: 'GangwonEduPower';
  font-size: 18px;

  cursor: pointer;

  @media (min-width: 1170px) {
    border-radius: 55px;
    font-size: 50px;
    box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.7);
  }

  @media (min-width: 1080px) {
    border-radius: 55px;
    font-size: 45px;
    box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.7);
  }
`;

export const OAuthWrap = styled.div`
  position: relative;
  width: calc(90% - 20px);
  height: 40%;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 20px;

  background-color: ${NaeYangKkuTheme.white};
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.3);

  cursor: pointer;

  span {
    color: #5b5555;
    font-family: 'GangwonEduPower';
    font-size: 18px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1170px) {
    width: calc(90% - 100px);
    padding-left: 100px;

    border-radius: 55px;

    box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.4);

    img {
      width: 130px !important;
      height: 130px !important;
    }

    span {
      font-size: 50px;
    }
  }

  @media (min-width: 1080px) {
    width: calc(90% - 100px);
    padding-left: 100px;

    border-radius: 55px;

    box-shadow: 0px 4px 24px 0px rgba(255, 119, 119, 0.4);

    img {
      width: 110px !important;
      height: 110px !important;
    }

    span {
      font-size: 45px;
    }
  }
`;
