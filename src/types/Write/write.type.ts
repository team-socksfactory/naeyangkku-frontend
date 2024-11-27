export interface Write {
    content: string;
    nickname: string;
    iconNm: number;
    ownerId: number;
}

export interface WriteResponse {
    data: Write[];
}