import axios, { AxiosError } from 'axios';
import token from '../token/token';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from '../../constants/token.constants';
import customAxios from './customAxios';
import CONFIG from 'src/config/config.json';

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefeshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const ResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY)?.split('Bearer ')[1];
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY)?.split('Bearer ')[1];

    if (status === 403 && usingAccessToken !== undefined && usingRefreshToken !== undefined && !isRefreshing) {
      isRefreshing = true;

      try {
        const { data: newAccessToken } = await axios.post(`${CONFIG.SERVER}/user/refresh`, {
          refreshToken: usingAccessToken,
        }); //CHANGE YOUR API URL && BODY VALUE
        customAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = newAccessToken;

        token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

        isRefreshing = false;
        onTokenRefreshed(newAccessToken);

        return new Promise((resolve) => {
          addRefeshSubscriber((accessToken: string) => {
            originalRequest!.headers![REQUEST_TOKEN_KEY] = accessToken;
            resolve(customAxios(originalRequest!));
          });
        });
      } catch (error) {
        console.error('Failed to refresh access token:', error);

        window.alert('세션이 만료되었습니다.');
        token.clearToken();
        window.location.href = '/sign';
      }
    }
  }

  return Promise.reject(error);
};

export default ResponseHandler;
