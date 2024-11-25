export interface Letter {
  id: number;
  nickname: string;
  content: string;
  iconNm: number;
  ownerId: number;
}

export interface LetterResponse {
  data: Letter[];
}
