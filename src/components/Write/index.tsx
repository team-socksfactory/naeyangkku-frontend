import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import SantaImage from 'src/assets/img/write/santa.svg';
import ProgressGraph from '../ProgressGraph';

const Write: React.FC = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [progress, setProgress] = useState(60);
  const navigate = useNavigate();
  const { id } = useParams();

  const handlePreviewClick = () => {
    setProgress(80);
    navigate(`/modal/${id}`, { state: { message, name, id } });
  };

  return (
    <S.MainWrap>
      <ProgressGraph progress={progress} />
      <S.TitleWrap>
        <h1>메세지를 남겨주세요!</h1>
      </S.TitleWrap>
      <S.BackWrap>
        <S.IconImage src={SantaImage} alt="Message icon" />
        <S.Frame>
          <S.InputWrap>
            <S.contentInput
              placeholder="마음을 담은 메세지를 입력해주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </S.InputWrap>
        </S.Frame>
      </S.BackWrap>
      <S.NameWrap>
        <S.NameInput placeholder="남길 이름을 입력해주세요." value={name} onChange={(e) => setName(e.target.value)} />
      </S.NameWrap>
      <S.ShowWrap>
        <S.ShowSpan onClick={handlePreviewClick}>미리 보기</S.ShowSpan>
      </S.ShowWrap>
    </S.MainWrap>
  );
};

export default Write;
