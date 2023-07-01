import axios from 'axios';
import Cookies from 'js-cookie';

import { instanse } from '@/packages/api/config';
import { getContentType } from '@/packages/api/config/helper';
import {
  AuthResponseType,
  CookieFieldEnum,
  EmailPasswordType,
  MethodAuthEnum
} from '@/packages/types';

import { saveToStorage } from './helpers';

class AuthService {
  static async mainAuth(type: MethodAuthEnum, data: EmailPasswordType) {
    const response = await instanse<AuthResponseType>({
      url: `/auth/${type}`,
      method: 'POST',
      data
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response.data;
  }

  static async getNewToken() {
    const refreshToken = Cookies.get(CookieFieldEnum.REFRESH_TOKEN);

    const response = await axios.post<string, { data: AuthResponseType }>(
      `${process.env.SERVER_URL}/auth/login/access-token`,
      { refreshToken },
      { headers: getContentType() }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  }
}

export default AuthService;
