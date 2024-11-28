import { useMutation, useQuery } from 'react-query';
import authRepositoryImpl from 'src/repository/Auth/auth.repositoryImpl';
import { Login, Signup } from 'src/types/Auth/auth.type';
import { QUERY_KEYS } from '../queryKey';

export const useRegisterMutation = () => {
  const mutation = useMutation((request: Signup) => authRepositoryImpl.register(request));
  return mutation;
};

export const useLoginMutation = () => {
  const mutation = useMutation((request: Login) => authRepositoryImpl.login(request));
  return mutation;
};

export const useGetUserNickanme = (userId: number) =>
  useQuery(QUERY_KEYS.user, () => authRepositoryImpl.getNickname(userId), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useGetIdByNickname = (nickname: string) =>
  useQuery(QUERY_KEYS.user, () => authRepositoryImpl.getUserIdByNickname(nickname), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
