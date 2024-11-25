import axios from 'axios';
import { AuthRepository } from './auth.repository';
import CONFIG from 'src/config/config.json';
import { Login, LoginResponse, Signup } from 'src/types/Auth/auth.type';

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
}

const authRepositoryImpl = new AuthRepositoryImpl();
export default authRepositoryImpl;
