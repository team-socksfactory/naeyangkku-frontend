import { useMutation } from "react-query";
import writeRepositoryImpl from "src/repository/Write/write.repositoryImpl";
import { Write, WriteResponse } from "src/types/Write/write.type";

export const usePostMyLetter = () => {
    return useMutation<WriteResponse, Error, Write>(
        (writeData) => writeRepositoryImpl.postLetter(writeData),
        {
            onSuccess: (data) => {
                console.log("편지보내기 성공:", data);
            },
            onError: (error) => {
                console.error("편지보내기 실패:", error);
            },
        }
    );
};
