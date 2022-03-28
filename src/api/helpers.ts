import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';

export const nedsAPI = axios.create({
  baseURL: Config.BASE_API_URL,
  headers: {Accept: 'application/json'},
});

export const getAPIErrMsg = (
  err: unknown,
  fallback = 'Internal Server Error',
): string => {
  const axiosError = err as AxiosError<{
    status: number;
    message: string;
  }>;
  return axiosError.response?.data?.message || fallback;
};
