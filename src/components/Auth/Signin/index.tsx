import React from 'react';
import * as S from './style';
import LogoHat from 'src/assets/images/Group 17.svg';
import useAuth from 'src/hooks/Auth/useAuth';
import { Toaster } from 'react-hot-toast';
import { OAUTH_ITEMS } from 'src/constants/auth/oauth.constants';

const Signin = () => {
  const { signupInfo, loginInfo, handleLoginInfo, handleSignupInfo, menu, setMenu, onRegister, onLogin } = useAuth();
  return (
    <S.SigninWrap>
      <S.TitleWrap>
        <img src={LogoHat} alt="" />
        <h1>내 양말을 달아줘!</h1>
        <span>양말을 달고 서로 마음을 전하세요!</span>
      </S.TitleWrap>
      <S.SignWrap>
        <S.MenuSelectWrap>
          <S.Menu isSelected={menu === '회원가입'} onClick={() => setMenu('회원가입')}>
            <span>회원가입</span>
          </S.Menu>
          <S.Menu isSelected={menu === '로그인'} onClick={() => setMenu('로그인')}>
            <span>로그인</span>
          </S.Menu>
        </S.MenuSelectWrap>
        <S.InputWrap menu={menu}>
          {menu === '회원가입' && (
            <div>
              <span>닉네임</span>
              <input placeholder="10글자 이하" name="nickname" value={signupInfo.nickname} onChange={handleSignupInfo} />
            </div>
          )}
          <div>
            <span>이메일</span>
            <input
              placeholder="영문 소문자, 숫자 포함"
              name="email"
              value={menu === '회원가입' ? signupInfo.email : loginInfo.email}
              onChange={menu === '회원가입' ? handleSignupInfo : handleLoginInfo}
            />
          </div>
          <div>
            <span>비밀번호</span>
            <input
              placeholder="8자 이상"
              name="password"
              value={menu === '회원가입' ? signupInfo.password : loginInfo.password}
              onChange={menu === '회원가입' ? handleSignupInfo : handleLoginInfo}
            />
          </div>
        </S.InputWrap>
      </S.SignWrap>
      <S.Button onClick={menu === '회원가입' ? onRegister : onLogin}>벽난로 만들기</S.Button>
      <S.OAuthWrap>
        {OAUTH_ITEMS.map((item) => (
          <img src={item.src} key={item.id} alt={item.id} />
        ))}
      </S.OAuthWrap>
      <Toaster />
    </S.SigninWrap>
  );
};

export default Signin;
