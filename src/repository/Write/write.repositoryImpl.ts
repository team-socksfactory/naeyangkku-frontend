import { WriteRepository } from "src/repository/Write/write.repository";
import { WriteResponse, Write } from "src/types/Write/write.type";
import customAxios from "src/libs/axios/customAxios";
import axios, { AxiosError } from 'axios';

class WriteRepositoryImpl implements WriteRepository {
    public async postLetter(writeData: Omit<Write, 'id'>): Promise<WriteResponse> {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("로그인이 필요합니다.");
        }

        try {
            const { data } = await customAxios.post<WriteResponse>(
                '/letter/send',
                {
                    ...writeData,
                    ownerId: 1
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            );
            return data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.error("편지 보내기 오류:",
                    axiosError.response?.data,
                    axiosError.response?.status
                );

                throw new Error(
                    (axiosError.response?.data as any)?.message ||
                    "편지 보내기에 실패했습니다."
                );
            }

            console.error("예상치 못한 오류:", error);
            throw new Error("편지 보내기 중 오류가 발생했습니다.");
        }
    }
}

const writeRepositoryImpl = new WriteRepositoryImpl();
export default writeRepositoryImpl;
