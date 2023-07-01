import {
  AuthResponseType,
  CookieFieldEnum,
  LocalStorageFieldEnum,
  TokensType
} from '@/packages/types';

import { getCookieValue, removeCookieValue, setCookieValue } from './cookie';

export const getAccessToken = () => {
  const accessToken = getCookieValue(CookieFieldEnum.ACCESS_TOKEN);

  return accessToken || null;
};

export const getRefreshToken = () => {
  const refreshToken = getCookieValue(CookieFieldEnum.REFRESH_TOKEN);

  return refreshToken || null;
};

export const saveTokensStorage = (data: TokensType) => {
  setCookieValue(CookieFieldEnum.ACCESS_TOKEN, data.accessToken);
  setCookieValue(CookieFieldEnum.REFRESH_TOKEN, data.refreshToken);
};

export const saveToStorage = (data: AuthResponseType) => {
  saveTokensStorage(data);

  localStorage.setItem(LocalStorageFieldEnum.USER, JSON.stringify(data.user));
};

export const removeFromStorage = () => {
  removeCookieValue(CookieFieldEnum.ACCESS_TOKEN);
  removeCookieValue(CookieFieldEnum.REFRESH_TOKEN);

  localStorage.removeItem(LocalStorageFieldEnum.USER);
};

export const getUserFromStorage = () =>
  JSON.parse(localStorage.getItem(LocalStorageFieldEnum.USER) || '{}');

export const getStorageValue = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);

    return ls || null;
  }

  return null;
};
