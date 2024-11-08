import React from 'react';
import * as S from './style';
import { NaeYangKkuTheme } from 'src/style/theme';
import Modal from './Modal';

const Home = () => {
  return (
    <S.MainWrap>
      <S.TitleWrap>
        <div style={{ display: 'inline-flex', gap: '3px' }}>
          <h1 style={{ color: `${NaeYangKkuTheme.secondlyNormal}` }}>루돌돌</h1>
          <h1>님의 벽난로</h1>
        </div>
        <div>
          <span style={{ fontSize: '16px' }}>12</span>
          <span>개의 양말이 도착했어요!</span>
        </div>
      </S.TitleWrap>
      <S.SocksWrap></S.SocksWrap>
      <S.Button>벽난로 꾸며주기</S.Button>
      {/* <Modal /> 
      이거 양말 달고 나서 해야되서 useState로 관리 필요함 
      나중에 서버 연결 끝나고 나서 할게
      */} 
    </S.MainWrap>
  );
};

export default Home;
