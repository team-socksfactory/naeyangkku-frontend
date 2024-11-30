import styled, { css } from 'styled-components';
import MobileBackgroundImage from 'src/assets/images/mobileBackground.svg';
import DesktopBackgroundImage from 'src/assets/images/desktopBackground.svg';
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

  @media (max-width: 750px) {
    width: calc(100vw - 90px);
    height: calc(100vh - 248px);
    background-image: url(${MobileBackgroundImage});
    background-size: cover;
    background-position: left;

    padding: 180px 50px 68px 50px;
  }

  @media (max-width: 1080px) {
    width: calc(100vw - 150px);
    height: calc(100vh - 460px);
    padding: 360px 50px 100px 100px;
    background-image: url(${MobileBackgroundImage});
    background-size: cover;
  }

  @media (max-width: 1242px) {
    width: calc(100vw - 150px);
    height: calc(100vh - 460px);
    padding: 360px 50px 100px 100px;
    background-image: url(${MobileBackgroundImage});
    background-size: cover;
    background-position: center;
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

  div > h1 {
    color: #fff;
    font-family: 'GangwonEduSaeeum';
    font-size: 2.5rem;
    font-weight: 400;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 22px;
  }

  div > .nickname {
    font-family: 'GangwonEdu Modu';
    font-size: 2.7rem;
    color: ${NaeYangKkuTheme.secondlyNormal};
  }

  @media (max-width: 750px) {
    div > h1 {
      font-size: 3rem;
    }

    div > .nickname {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1080px) {
    div > h1 {
      font-size: 4rem;
    }

    div > .nickname {
      font-size: 4.5rem;
    }
  }

  @media (max-width: 1242px) {
    div > h1 {
      font-size: 5rem;
    }

    div > .nickname {
      font-size: 5.5rem;
    }
  }
`;

export const letterCountSpan = styled.span`
  color: #fff;
  font-family: 'GangwonEduSaeeum';
  font-size: 2.1rem;
  font-weight: 400;
  width: auto;

  @media (max-width: 750px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1080px) {
    font-size: 3.7rem;
  }

  @media (max-width: 1242px) {
    font-size: 4.8rem;
  }
`;

export const SocksWrap = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;

export const IconWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    span {
      color: #fff;
      text-align: center;
      font-family: 'GangwonEduSaeeum';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 122.222% */
    }

    img {
      width: 80% !important;
      height: 5% !important;
    }

    @media (max-width: 750px) {
      img {
        width: 110px !important;
        height: 110px !important;
      }

      span {
        font-size: 24px;
      }
    }

    @media (max-width: 1080px) {
      img {
        width: 160px !important;
        height: 160px !important;
      }

      span {
        font-size: 38px;
      }
    }
  }
`;

export const Button = styled.div<{ isOwner: boolean }>`
  width: 30%;
  height: 8%;

  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.5);

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

  @media (max-width: 750px) {
    width: 100%;
    height: 8%;

    font-size: 28px;
  }

  @media (max-width: 1080px) {
    width: 100%;
    height: 8%;

    font-size: 46px;
  }
`;
