import { LetterResponse } from 'src/types/Home/home.type';
import { HomeRepository } from './home.repository';
import customAxios from 'src/libs/axios/customAxios';

class HomeRepositoryImpl implements HomeRepository {
  public async getLetter(ownerId: number): Promise<LetterResponse> {
    const { data } = await customAxios.get(`/letter/list/${ownerId}`);
    return data;
  }

  public async getLetterById(id: number): Promise<LetterResponse> {
    const { data } = await customAxios.get(`/letter/${id}`);
    return data;
  }
}

const homeRepositoryImpl = new HomeRepositoryImpl();
export default homeRepositoryImpl;
