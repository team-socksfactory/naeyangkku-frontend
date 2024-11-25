import {  LetterResponse } from 'src/types/Home/home.type';

export interface HomeRepository {
  getLetter(ownerId: string): Promise<LetterResponse>;
  getLetterById(id: number): Promise<LetterResponse>;
  getSharedLetter(ownerNickname: string): Promise<LetterResponse>;
}
