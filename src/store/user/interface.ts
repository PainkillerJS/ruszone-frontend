import type { UserModel } from '@/models/user';

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

export interface UserStateType {
  email: string;
}

export interface TokensType extends Record<CookieFieldEnum, string> {}

export interface InitialUserStateType {
  user: UserStateType | null;
  isLoading: boolean;
}

export interface EmailPasswordType {
  email: string;
  pasword: string;
}

export interface AuthResponseType extends TokensType {
  user: UserModel;
}
