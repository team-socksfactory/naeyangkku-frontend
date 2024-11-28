import { Write, WriteResponse } from "src/types/Write/write.type";

export interface WriteRepository {
    postLetter(writeData: Omit<Write, 'id'>): Promise<WriteResponse>;
}
