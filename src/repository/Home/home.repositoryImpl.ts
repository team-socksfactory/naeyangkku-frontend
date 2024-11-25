import { LetterResponse } from 'src/types/Home/home.type';
import { HomeRepository } from './home.repository';
import customAxios from 'src/libs/axios/customAxios';
import { useParams } from 'react-router-dom';

class HomeRepositoryImpl implements HomeRepository {
  public async getLetter(ownerId: string): Promise<LetterResponse> {
    const { data } = await customAxios.get(`/letter/list/${ownerId}`);
    return data;
  }

  public async getLetterById(id: number): Promise<LetterResponse> {
    const { data } = await customAxios.get(`/letter/${id}`);
    return data;
  }

  public async getSharedLetter(ownerNickname: string): Promise<LetterResponse> {
    const { data } = await customAxios.get(`/share/${ownerNickname}`);

    return data;
  }
}

const homeRepositoryImpl = new HomeRepositoryImpl();
export default homeRepositoryImpl;
