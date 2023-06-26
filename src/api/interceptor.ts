import axios from 'axios';

import { getAccessToken, removeFromStorage } from '@/services/auth/helpers';
import AuthService from '@/services/auth/service';

import { errorCatch, getContentType } from './helper';

export const instanse = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: getContentType()
});

instanse.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instanse.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    const errorMessage = errorCatch(error);
    const isExpiredJwt = errorMessage === 'jwt expired';
    const errorFromBackend =
      error.response.status === 401 || isExpiredJwt || errorMessage === 'jwt must be provided';

    if (errorFromBackend && !error?.config?._isRetry) {
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewToken();

        return await instanse.request(originalRequest);
      } catch (error) {
        if (isExpiredJwt) {
          removeFromStorage();
        }
      }
    }
  }
);
