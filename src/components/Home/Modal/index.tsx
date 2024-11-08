import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './style';
import Socks from 'src/assets/images/Group 25.png';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const navigate = useNavigate();
  const [visible, setIsVisible] = useState(isOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeOutId = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeOutId);
    }
  }, [isOpen]);
  
  return (
    <>
      <S.MainWrap isOpen={isOpen}>
        <img src={Socks} alt="" />
        <button onClick={() => navigate('/login')}>내 벽난로 만들기</button>
        <span onClick={handleClose}>닫기</span>
      </S.MainWrap>
    </>
  );
};

export default Modal;
