import { useEffect, useState } from 'react';
import * as S from './style';
import { NaeYangKkuTheme } from 'src/style/theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { EDIT_TREE_ITEM } from 'src/constants/home/home.constants';
import { Shadow } from 'src/assets/images/socks';
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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [myLetterData, setMyLetterData] = useState<Letter[]>([]);
  const [sharedLetterData, setSharedLetterData] = useState<Letter[]>([]);
  const [letterId, setLetterId] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const myName = localStorage.getItem('name');
  const userId = localStorage.getItem('userId');

  const username = useLocation().pathname.split('/')[1];

  const getLetterByToken = async () => {
    if (token.getToken(ACCESS_TOKEN_KEY) !== undefined && myName === decodeURI(username)) {
      const { data: letter } = await homeRepositoryImpl.getLetter(+userId!);
      setMyLetterData(letter);
    }
    if (myName !== decodeURI(username)) {
      const { data: sharedLetter } = await homeRepositoryImpl.getSharedLetter(username);
      setSharedLetterData(sharedLetter);
    }
  };

  const getNicknameByOwner = async () => {
    authRepositoryImpl.getUserIdByNickname(username).then((res) => {
      setId(Number(res.data));
    });
  };
  useEffect(() => {
    getNicknameByOwner();
  }, []);

  useEffect(() => {
    getLetterByToken();
  }, [token.getToken(ACCESS_TOKEN_KEY)]);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <S.MainWrap isOpen={isOpen}>
        <S.TitleWrap>
          <div style={{ display: 'inline-flex', gap: '3px' }}>
            <h1 style={{ color: `${NaeYangKkuTheme.secondlyNormal}`, fontFamily: 'GangwonEdu Modu', fontSize: 27 }}>
              {decodeURI(username)}
            </h1>
            <h1>님의 트리</h1>
          </div>
          <S.letterCountSpan>
            {myName === decodeURI(username)
              ? myLetterData?.length === 0
                ? '아직 받은 편지가 없어요..\n편지를 부탁해 보세요!'
                : `${myLetterData?.length}개의 양말이 도착했어요`
              : sharedLetterData?.length === 0
              ? '아직 받은 편지가 없어요..\n편지를 부탁해 보세요!'
              : `${sharedLetterData?.length}개의 양말이 도착했어요`}
          </S.letterCountSpan>
        </S.TitleWrap>
        <S.SocksWrap>
          <S.IconWrap>
            {myName === decodeURI(username)
              ? myLetterData?.map((letter) => {
                  const { x, y } = randomPosition(319, 524);
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
                      <img src={Shadow} alt="" className="shadow" />
                      <span>{letter.nickname}</span>
                    </div>
                  );
                })
              : sharedLetterData?.map((letter) => {
                  const { x, y } = randomPosition(319, 524);
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
                      <img src={Shadow} alt="" className="shadow" />
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

        {!token.getToken(ACCESS_TOKEN_KEY) && (
          <p style={{ position: 'absolute', top: '92%', left: '18%' }}>
            편지 남기기 기능은 로그인한 사용자만 이용할 수 있어요
          </p>
        )}
        <Toaster />
        {isOpen && <LetterDetail isOpen={isOpen} handleIsOpen={handleIsOpen} id={letterId} />}
      </S.MainWrap>
    </>
  );
};

export default React.memo(Home);
