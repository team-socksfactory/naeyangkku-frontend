import { Login, LoginResponse, NicknameResponse, Signup } from 'src/types/Auth/auth.type';

export interface AuthRepository {
  register(request: Signup): Promise<void>;
  login(request: Login): Promise<LoginResponse>
  getNickname(userId: number): Promise<NicknameResponse>;
  getUserIdByNickname(nickname: string): Promise<NicknameResponse>;
}
