export interface Signup {
  name: string;
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
    name: string;
    accessToken: string;
    refreshToken: string;
  };
}
