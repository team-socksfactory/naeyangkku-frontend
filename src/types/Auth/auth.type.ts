export interface Signup {
  nickname: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse extends Response {
  data: {
    id: number;
    nickname: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface NicknameResponse extends Response {
  data: string;
}
