import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import SantaImage from 'src/assets/img/write/santa.svg';
import { usePostMyLetter } from 'src/query/Write/write.query';
import { Write } from 'src/types/Write/write.type';
import { writeStore } from 'src/stores/write/write.store';
import ProgressGraph from 'src/components/ProgressGraph';

const Modal: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message, name } = location.state || { message: '', name: '' };
  const { id } = useParams();
  const { mutate: postLetter, isLoading } = usePostMyLetter();
  const iconId = writeStore((state) => state.iconId);

  const handlePostLetter = () => {
    const ownerId = id;

    console.log('ownerId:', ownerId);

    const missingInfo: string[] = [];

    if (!message) missingInfo.push('메시지');
    if (!name) missingInfo.push('이름');
    if (!ownerId) missingInfo.push('사용자 ID');

    if (missingInfo.length > 0) {
      alert(`다음 정보가 부족합니다: ${missingInfo.join(', ')}`);
      return;
    }

    const writeData: Write = {
      content: message,
      nickname: name,
      iconNm: iconId,
      ownerId: Number(ownerId),
    };
    postLetter(writeData, {
      onSuccess: () => {
        alert('편지가 성공적으로 보내졌습니다!');
        navigate(-3);
      },
      onError: (error: Error) => {
        console.error('편지 전송 실패:', error);
        alert(error.message || '편지를 보내는 데 실패했습니다. 다시 시도해주세요.');
      },
    });
  };

  return (
    <S.MainWrap>
      <ProgressGraph progress={80} />
      <S.TitleWrap>
        <h1>메세지를 남겨주세요!</h1>
      </S.TitleWrap>
      <S.BackWrap>
        <S.IconImage src={SantaImage} alt="Message icon" />

        <S.Frame>
          <S.InputWrap>
            <S.contentInput value={message} readOnly />
            <S.NameInput value={`From. ${name}`} readOnly />
          </S.InputWrap>
        </S.Frame>
      </S.BackWrap>
      <S.ShowWrap>
        <S.ShowSpan as="button" onClick={handlePostLetter} disabled={isLoading}>
          {isLoading ? '전송 중...' : '양말 달기'}
        </S.ShowSpan>
      </S.ShowWrap>
    </S.MainWrap>
  );
};

export default Modal;
