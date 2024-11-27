import { WriteRepository } from "src/repository/Write/write.repository";
import { WriteResponse, Write } from "src/types/Write/write.type";
import customAxios from "src/libs/axios/customAxios";
import axios, { AxiosError } from 'axios';

function getCookie(name: string): void | string | null {
    try {
        console.log('전체 쿠키:', document.cookie);

        const cookies = document.cookie

        console.log(document.cookie.split('; ')[0].split('=')[1]);

        const targetCookie = cookies.split('; ');

        if (targetCookie) {
            const token = targetCookie[0].split('=')[1];
            console.log('찾은 토큰:', token);
            return token;
        }

        console.log('토큰을 찾을 수 없음');
        return null;
    } catch (error) {
        console.error('쿠키 읽기 오류:', error);
        return null;
    }
}

class WriteRepositoryImpl implements WriteRepository {
    public async postLetter(writeData: Omit<Write, 'id' | 'ownerId'> & { ownerId: number }): Promise<WriteResponse> {
        console.log('쿠키 전체 내용:', document.cookie);

        let token = getCookie('token');

        if (!token) {
            token = localStorage.getItem('token');
        }

        console.log('최종 토큰:', token);

        if (!token) {
            console.error('토큰 없음');
            throw new Error("로그인이 필요합니다.");
        }

        try {
            console.log('요청 데이터:', {
                ...writeData,
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const { data } = await customAxios.post<WriteResponse>(
                '/letter/send',
                writeData,
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            );
            return data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.error("편지 보내기 오류 전체 정보:", {
                    response: axiosError.response?.data,
                    status: axiosError.response?.status,
                    headers: axiosError.response?.headers
                });

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