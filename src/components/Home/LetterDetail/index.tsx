import React from 'react';
import * as S from './style';
import { useGetLetterById } from 'src/query/Home/home.query';
import { EDIT_TREE_ITEM } from 'src/constants/home/home.constants';

interface LetterDetailProps {
  id: number;
  isOpen: boolean;
  handleIsOpen: () => void;
}

const LetterDetail = ({ id, isOpen, handleIsOpen }: LetterDetailProps) => {
  const { data: letterDetail } = useGetLetterById(id);
  return (
    <S.LetterWrap onClick={handleIsOpen}>
      <S.BackWrap>
        {letterDetail?.data.map((letter, idx) => {
          const iconItem = EDIT_TREE_ITEM.find((item) => item.iconNm === letter.iconNm);
          return (
            <>
              <S.IconImage src={iconItem?.src} />
              <S.Frame>
                <S.InputWrap>
                  <S.contentInput value={letter.content} readOnly />
                  <S.NameInput value={letter.nickname} readOnly />
                </S.InputWrap>
              </S.Frame>
            </>
          );
        })}
      </S.BackWrap>
    </S.LetterWrap>
  );
};

export default React.memo(LetterDetail);
