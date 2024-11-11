import { LetterResponse } from 'src/types/Home/home.type';

export interface HomeRepository {
  getLetter(ownerId: number): Promise<LetterResponse>;
  getLetterById(id: number): Promise<LetterResponse>;
}
