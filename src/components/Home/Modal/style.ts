import { NaeYangKkuTheme } from 'src/style/theme';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0);
    opacity: 1; 
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1; 
  }
  100% {
    transform: translateY(100%); 
    opacity: 0; 
  }
`;

export const MainWrap = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 40vh;

  position: absolute;
  left: 0;
  top: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background: ${NaeYangKkuTheme.teritaryNormal};
  border: none;
  border-radius: 30px 30px 0px 0px;

  animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.5s ease-out;
  animation-fill-mode: forwards; /* 애니메이션 끝나고 상태 유지 */

  img {
    width: 240px;
    height: 171px;
  }

  button {
    width: 80%;
    height: 15%;

    background: #634646;

    border: none;
    border-radius: 40px;
    color: #fff;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;

    cursor: pointer;
  }

  span {
    color: #634646;
    font-family: 'GangwonEduSaeeum';
    font-size: 24px;
    font-weight: 400;
    line-height: 22px;

    cursor: pointer;
  }
`;
