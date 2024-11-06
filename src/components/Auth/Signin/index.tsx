import React from 'react';
import * as S from './style';
import LogoHat from 'src/assets/images/Group 17.svg';
import useAuth from 'src/hooks/Auth/useAuth';

const Signin = () => {
  const { signupInfo, handleSignupInfo, menu, setMenu } = useAuth();
  return (
    <S.SigninWrap>
      <S.TitleWrap>
        <img src={LogoHat} alt="" />
        <h1>내 양말을 달아줘!</h1>
        <span>양말을 달고 서로 마음을 전하세요!</span>
      </S.TitleWrap>
      <S.SignWrap>
        <S.MenuSelectWrap>
          <S.Menu isSelected={menu === '회원가입'} onClick={() => setMenu("회원가입")}>
            <span>회원가입</span>
          </S.Menu>
          <S.Menu isSelected={menu === '로그인'} onClick={() => setMenu("로그인")}>
            <span>로그인</span>
          </S.Menu>
        </S.MenuSelectWrap>
        <S.InputWrap>
          <div>
            <span>닉네임</span>
            <input placeholder="10글자 이하" name="nickname" value={signupInfo.nickname} onChange={handleSignupInfo} />
          </div>
          <div>
            <span>아이디</span>
            <input placeholder="영문 소문자, 숫자 포함" name="id" value={signupInfo.id} onChange={handleSignupInfo} />
          </div>
          <div>
            <span>비밀번호</span>
            <input placeholder="8자 이상" name="password" value={signupInfo.password} onChange={handleSignupInfo} />
          </div>
        </S.InputWrap>
      </S.SignWrap>
      <S.Button>벽난로 만들기</S.Button>
    </S.SigninWrap>
  );
};

export default Signin;
