import { useEffect, useState } from 'react';
import * as S from './style';
import { NaeYangKkuTheme } from 'src/style/theme';
import { useLocation, useParams } from 'react-router-dom';
import { EDIT_TREE_ITEM } from 'src/constants/home/home.constants';
import { Shadow } from 'src/assets/images/socks';
import { randomPosition } from 'src/utils/Home/randomPosition';
import LetterDetail from './LetterDetail';
import toast, { Toaster } from 'react-hot-toast';
import token from 'src/libs/token/token';
import { ACCESS_TOKEN_KEY } from 'src/constants/token.constants';
import { LetterResponse } from 'src/types/Home/home.type';
import homeRepositoryImpl from 'src/repository/Home/home.repositoryImpl';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [myLetterData, setMyLetterData] = useState<LetterResponse>({ data: [] });
  const [sharedLetterData, setSharedLetterData] = useState<LetterResponse>({ data: [] });
  const myName = localStorage.getItem('name');
  const userId = localStorage.getItem('userId');
  const username = useLocation().pathname.split('/')[1];
  const { id } = useParams();
  const location = useLocation();

  const successToast = () => {
    if (token.getToken(ACCESS_TOKEN_KEY) && location.state === 'success') {
      toast.success('로그인 성공', { duration: 800 });
    }
  };

  const getLetterByToken = async () => {
    if (token.getToken(ACCESS_TOKEN_KEY) !== undefined) {
      const letter = await homeRepositoryImpl.getLetter(userId!);
      setMyLetterData(letter);
    } else {
      const letter = await homeRepositoryImpl.getSharedLetter(username);
      setSharedLetterData(letter);
    }
  };

  useEffect(() => {
    getLetterByToken();
    successToast();
  }, []);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.MainWrap isOpen={isOpen}>
      <S.TitleWrap>
        <div style={{ display: 'inline-flex', gap: '3px' }}>
          <h1 style={{ color: `${NaeYangKkuTheme.secondlyNormal}`, fontFamily: 'GangwonEdu Modu', fontSize: 27 }}>
            {id}
          </h1>
          <h1>님의 트리</h1>
        </div>
        <S.letterCountSpan>
          {myName === decodeURI(username)
            ? myLetterData?.data.length === 0
              ? '아직 받은 편지가 없어요..\n편지를 부탁해 보세요!'
              : `${myLetterData?.data?.length}개의 양말이 도착했어요`
            : sharedLetterData?.data.length === 0
            ? '아직 받은 편지가 없어요..\n편지를 부탁해 보세요!'
            : `${sharedLetterData?.data?.length}개의 양말이 도착했어요`}
        </S.letterCountSpan>
      </S.TitleWrap>
      <S.SocksWrap>
        <S.IconWrap>
          {sharedLetterData?.data.map((letter) => {
            const { x, y } = randomPosition(319, 524);
            const iconItem = EDIT_TREE_ITEM.find((item) => item.iconNm === letter.iconNm);
            return (
              <div key={letter.id} style={{ left: `${x}px`, top: `${y}px` }} onClick={handleIsOpen}>
                <img src={iconItem?.src} alt="" />
                <img src={Shadow} alt="" className="shadow" />
                <span>{letter.nickname}</span>
              </div>
            );
          })}
        </S.IconWrap>
      </S.SocksWrap>
      <S.Button
        isOwner={myName === decodeURI(username)}
        onClick={() => {
          if (myName === decodeURI(username)) {
            navigator.clipboard.writeText(window.location.href);
            toast.success('트리 링크가 복사되었어요!');
          }
        }}
      >
        {myName === decodeURI(username) ? '내 트리 링크 복사하기' : '편지 남겨주기'}
      </S.Button>
      {myName !== decodeURI(username) && (
        <p style={{ position: 'absolute', top: '92%', left: '18%' }}>
          편지 남기기 기능은 로그인한 사용자만 이용할 수 있어요
        </p>
      )}
      {isOpen && <LetterDetail isOpen={isOpen} handleIsOpen={handleIsOpen} />}
      <Toaster />
    </S.MainWrap>
  );
};

export default Home;
