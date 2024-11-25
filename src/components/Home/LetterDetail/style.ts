import styled from 'styled-components';

export const LetterWrap = styled.div`
  width: 90%;
  height: 55%;
  transform: translateX(-5%);

  border-radius: 30px;
  background: #f7eee7;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
`;

export const LetterBox = styled.div`
  width: 90%;
  height: 90%;

  position: absolute;
  z-index: 5;

  background-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='%23FF7777FF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 28px;
`;
