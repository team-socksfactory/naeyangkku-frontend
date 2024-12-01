import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { NaeYangKkuTheme } from 'src/style/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { EDIT_TREE_ITEM } from 'src/constants/home/home.constants';
import { randomPosition } from 'src/utils/Home/randomPosition';
import LetterDetail from './LetterDetail';
import toast, { Toaster } from 'react-hot-toast';
import token from 'src/libs/token/token';
import { ACCESS_TOKEN_KEY } from 'src/constants/token.constants';
import { Letter } from 'src/types/Home/home.type';
import homeRepositoryImpl from 'src/repository/Home/home.repositoryImpl';
import React from 'react';
import authRepositoryImpl from 'src/repository/Auth/auth.repositoryImpl';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [letterData, setLetterData] = useState<Letter[]>([]);
  const [letterId, setLetterId] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const myName = localStorage.getItem('name');
  const userId = localStorage.getItem('userId');

  const username = useLocation().pathname.split('/')[1];

  const getLetterByToken = async () => {
    if (token.getToken(ACCESS_TOKEN_KEY) === undefined || myName !== decodeURI(username)) {
      const { data: sharedLetter } = await homeRepositoryImpl.getSharedLetter(username);
      setLetterData(sharedLetter);
    }
    if (token.getToken(ACCESS_TOKEN_KEY) !== undefined && myName === decodeURI(username)) {
      const { data: letter } = await homeRepositoryImpl.getLetter(+userId!);
      setLetterData(letter);
    }
  };

  const getNicknameByOwner = async () => {
    if (token.getToken(ACCESS_TOKEN_KEY) !== undefined) {
      authRepositoryImpl.getUserIdByNickname(username).then((res) => {
        setId(Number(res.data));
      });
    }
  };
  useEffect(() => {
    getNicknameByOwner();
  }, []);

  useEffect(() => {
    getLetterByToken();
  }, []);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const noHaveLetter = () => {
    return (
      <>
        아직 받은 편지가 없어요..
        <br />
        <label style={{ fontSize: '7vw', letterSpacing: '0' }}> 편지를 부탁해 보세요!</label>
      </>
    );
  };

  return (
    <>
      <S.MainWrap isOpen={isOpen}>
        <S.TitleWrap>
          <div style={{ display: 'inline-flex', gap: '3px' }}>
            <h1 style={{ color: `${NaeYangKkuTheme.secondlyNormal}`, fontFamily: 'GangwonEdu Modu' }}>
              {decodeURI(username)}
            </h1>
            <h1>님의 트리</h1>
          </div>
          <S.letterCountSpan>
            {letterData?.length === 0 ? noHaveLetter() : `${letterData?.length}개의 양말이 도착했어요`}
          </S.letterCountSpan>
        </S.TitleWrap>
        <S.SocksWrap ref={containerRef}>
          <S.IconWrap>
            {letterData?.map((letter) => {
              const containerWidth = containerRef.current?.clientWidth || 0;
              const containerHeight = containerRef.current?.clientHeight! - 100 || 0;
              const { x, y } = randomPosition(containerWidth, containerHeight);
              const iconItem = EDIT_TREE_ITEM.find((item) => item.iconNm === letter.iconNm);
              return (
                <div
                  key={letter.id}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  onClick={() => {
                    handleIsOpen();
                    setLetterId(letter.id);
                  }}
                >
                  <img src={iconItem?.src} alt="" />
                  <span>{letter.nickname}</span>
                </div>
              );
            })}
          </S.IconWrap>
        </S.SocksWrap>
        {myName === decodeURI(username) ? (
          <CopyToClipboard text={window.location.href} onCopy={() => toast.success('링크 복사 성공!')}>
            <S.Button isOwner={myName === decodeURI(username)}>내 트리 링크 복사하기</S.Button>
          </CopyToClipboard>
        ) : (
          <S.Button isOwner={myName === decodeURI(username)} onClick={() => navigate(`/decoratePage/${id}`)}>
            편지 남겨주기
          </S.Button>
        )}

        {!token.getToken(ACCESS_TOKEN_KEY) && myName !== decodeURI(username) && (
          <p>편지 남기기 기능은 로그인한 사용자만 이용할 수 있어요</p>
        )}

        <Toaster />
        {isOpen && <LetterDetail isOpen={isOpen} handleIsOpen={handleIsOpen} id={letterId} />}
      </S.MainWrap>
    </>
  );
};

export default React.memo(Home);
