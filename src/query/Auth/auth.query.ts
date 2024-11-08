import { useMutation } from 'react-query';
import authRepositoryImpl from 'src/repository/Auth/auth.repositoryImpl';
import { Login, Signup } from 'src/types/Auth/auth.type';

export const useRegisterMutation = () => {
  const mutation = useMutation((request: Signup) => authRepositoryImpl.register(request));
  return mutation;
};

export const useLoginMutation = () => {
  const mutation = useMutation((request: Login) => authRepositoryImpl.login(request));
  return mutation;
};
