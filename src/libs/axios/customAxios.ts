import CONFIG from 'src/config/config.json';
import axios, { AxiosRequestConfig } from 'axios';
import requestInterceptor from './requestInterceptor';
import ResponseHandler from './responseHandler';
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: CONFIG.SERVER,
  headers: {
    Accept: 'application/json, text/plain, */*, multipart/form-data',
  },
};

const customAxios = axios.create(axiosRequestConfig);

customAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

customAxios.interceptors.response.use((res) => res, ResponseHandler);

export default customAxios;
