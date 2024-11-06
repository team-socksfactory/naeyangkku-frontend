import React, { useCallback, useState } from 'react';
import { Signup } from 'src/types/Auth/auth.type';

const useAuth = () => {
  const [signupInfo, setSignupInfo] = useState<Signup>({
    nickname: '',
    id: '',
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

  return {
    signupInfo,
    menu,
    setMenu,
    handleSignupInfo,
  };
};

export default useAuth;
