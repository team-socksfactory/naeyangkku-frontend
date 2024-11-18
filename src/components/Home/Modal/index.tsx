import React from 'react';
import * as S from './style';
import Socks from 'src/assets/images/Group 25.png';

const Modal = () => {
  return (
    <S.MainWrap>
      <img src={Socks} alt="" />
      <button>내 벽난로 만들기</button>
      <span>닫기</span>
    </S.MainWrap>
  );
};

export default Modal;
