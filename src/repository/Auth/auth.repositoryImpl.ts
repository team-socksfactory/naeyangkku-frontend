import axios from 'axios';
import { AuthRepository } from './auth.repository';
import CONFIG from 'src/config/config.json';
import { Login, LoginResponse, NicknameResponse, Signup } from 'src/types/Auth/auth.type';
import customAxios from 'src/libs/axios/customAxios';

const authInstance = axios.create({
  baseURL: CONFIG.SERVER,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthRepositoryImpl implements AuthRepository {
  public async register(request: Signup): Promise<void> {
    await authInstance.post('/user/register', request);
  }

  public async login(request: Login): Promise<LoginResponse> {
    const { data } = await authInstance.post('/user/login', request);
    return data;
  }

  public async getNickname(userId: number): Promise<NicknameResponse> {
    const { data } = await customAxios.post(`/user/nickname?userId=${userId}`);
    return data;
  }

  public async getUserIdByNickname(nickname: string): Promise<NicknameResponse> {
    const { data } = await customAxios.post(`/user/id?nickname=${nickname}`);
    return data;
  }
}

const authRepositoryImpl = new AuthRepositoryImpl();
export default authRepositoryImpl;
