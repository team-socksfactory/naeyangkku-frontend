import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../queryKey';
import homeRepositoryImpl from 'src/repository/Home/home.repositoryImpl';

export const useGetLetter = (ownerId: string) =>
  useQuery(QUERY_KEYS.letter.getLetter(ownerId), () => homeRepositoryImpl.getLetter(ownerId), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

export const useGetSharedLetter = (ownerNickname: string) =>
  useQuery(QUERY_KEYS.letter.getSharedLetter(ownerNickname), () => homeRepositoryImpl.getSharedLetter(ownerNickname), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
