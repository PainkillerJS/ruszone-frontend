import Cookies from 'js-cookie';

import { AuthResponseType, CookieFieldEnum, TokensType } from '@/store/user/interface';

export const saveTokensStorage = (data: TokensType) => {
  Cookies.set(CookieFieldEnum.ACCESS_TOKEN, data.accessToken);
  Cookies.set(CookieFieldEnum.REFRESH_TOKEN, data.refreshToken);
};

export const removeTokensStorage = () => {
  Cookies.remove(CookieFieldEnum.ACCESS_TOKEN);
  Cookies.remove(CookieFieldEnum.REFRESH_TOKEN);
};

export const saveToStorage = (data: AuthResponseType) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
