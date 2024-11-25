import React from 'react';
import * as S from './style';

interface LetterDetailProps {
  isOpen: boolean;
  handleIsOpen: () => void
}

const LetterDetail = ({isOpen, handleIsOpen}: LetterDetailProps) => {
  return (
    <S.LetterWrap onClick={handleIsOpen}>
      <S.LetterBox></S.LetterBox>
    </S.LetterWrap>
  );
};

export default LetterDetail;
