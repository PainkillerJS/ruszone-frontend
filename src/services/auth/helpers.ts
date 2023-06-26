import Cookies from 'js-cookie';

import {
  AuthResponseType,
  CookieFieldEnum,
  LocalStorageFieldEnum,
  TokensType
} from '@/store/user/interface';

export const getAccessToken = () => {
  const accessToken = Cookies.get(CookieFieldEnum.ACCESS_TOKEN);

  return accessToken || null;
};

export const getUserFromStorage = () =>
  JSON.parse(localStorage.getItem(LocalStorageFieldEnum.USER) || '{}');

export const saveTokensStorage = (data: TokensType) => {
  Cookies.set(CookieFieldEnum.ACCESS_TOKEN, data.accessToken);
  Cookies.set(CookieFieldEnum.REFRESH_TOKEN, data.refreshToken);
};

export const removeFromStorage = () => {
  Cookies.remove(CookieFieldEnum.ACCESS_TOKEN);
  Cookies.remove(CookieFieldEnum.REFRESH_TOKEN);
  localStorage.removeItem(LocalStorageFieldEnum.USER);
};

export const saveToStorage = (data: AuthResponseType) => {
  saveTokensStorage(data);
  localStorage.setItem(LocalStorageFieldEnum.USER, JSON.stringify(data.user));
};
