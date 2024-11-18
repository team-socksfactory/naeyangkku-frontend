export interface Letter {
  id: number;
  nickname: string;
  content: string;
  ownerId: number;
}

export interface LetterResponse {
  data: Letter[];
}