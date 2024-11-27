import { AxiosError } from 'axios';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'src/constants/token.constants';
import token from 'src/libs/token/token';
import { useLoginMutation, useRegisterMutation } from 'src/query/Auth/auth.query';
import { Login, Signup } from 'src/types/Auth/auth.type';

const useAuth = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState<Signup>({
    nickname: '',
    email: '',
    password: '',
  });

  const [loginInfo, setLoginInfo] = useState<Login>({
    email: '',
    password: '',
  });

  const [menu, setMenu] = useState<'회원가입' | '로그인'>('회원가입');

  const handleSignupInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignupInfo((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupInfo]
  );

  const handleLoginInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLoginInfo((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginInfo]
  );

  const registerMutation = useRegisterMutation();
  const onRegister = () => {
    registerMutation.mutate(signupInfo, {
      onSuccess: () => {
        toast.success('회원가입 성공!', { duration: 800 });
        setMenu('로그인');
      },
      onError: (error) => {
        toast.error((error as AxiosError).message, { duration: 800 });
      },
    });
  };

  const loginMutation = useLoginMutation();
  const onLogin = () => {
    loginMutation.mutate(loginInfo, {
      onSuccess: (res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
        localStorage.setItem('userId', res.data.id.toString());
        localStorage.setItem('name', res.data.nickname);
        navigate(`/${localStorage.getItem('name')}`, { state: 'success' });
      },
      onError: (error) => {
        toast.error((error as AxiosError).message);
      },
    });
  };

  return {
    signupInfo,
    loginInfo,
    menu,
    setMenu,
    handleSignupInfo,
    handleLoginInfo,

    onRegister,
    onLogin,
  };
};

export default useAuth;
