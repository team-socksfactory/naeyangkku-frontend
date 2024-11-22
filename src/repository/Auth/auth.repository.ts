import { Login, LoginResponse, Signup } from 'src/types/Auth/auth.type';

export interface AuthRepository {
  register(request: Signup): Promise<void>;
  login(request: Login): Promise<LoginResponse>
}
