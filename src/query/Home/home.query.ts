import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../queryKey';
import homeRepositoryImpl from 'src/repository/Home/home.repositoryImpl';

export const useGetMyLetter = (ownerId: number) =>
  useQuery(QUERY_KEYS.letter.getLetter(ownerId), () => homeRepositoryImpl.getLetter(ownerId), {
    staleTime: 3600000,
    cacheTime: 3600000,
  });
