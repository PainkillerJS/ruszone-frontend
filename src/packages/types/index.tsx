import { UserModel } from '../api/models/user';

export enum CookieFieldEnum {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken'
}

export enum LocalStorageFieldEnum {
  USER = 'user'
}

export enum MethodAuthEnum {
  LOGIN = 'login',
  REGISTER = 'register'
}

export interface TokensType extends Record<CookieFieldEnum, string> {}

export interface EmailPasswordType {
  email: string;
  password: string;
}

export interface AuthResponseType extends TokensType {
  user: UserModel;
}
