import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorCatch } from '@/api/helper';
import { removeFromStorage } from '@/services/auth/helpers';
import AuthService from '@/services/auth/service';

import { AuthResponseType, EmailPasswordType, MethodAuthEnum } from './interface';

export const register = createAsyncThunk<AuthResponseType, EmailPasswordType>(
  'auth/register',
  async (data, thinkApi) => {
    try {
      const response = await AuthService.mainAuth(MethodAuthEnum.REGISTER, data);

      return response;
    } catch (e) {
      return thinkApi.rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk<AuthResponseType, EmailPasswordType>(
  'auth/login',
  async (data, thinkApi) => {
    try {
      const response = await AuthService.mainAuth(MethodAuthEnum.LOGIN, data);

      return response;
    } catch (e) {
      return thinkApi.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', () => {
  removeFromStorage();
});

export const checkAuth = createAsyncThunk<AuthResponseType>(
  'auth/check-auth',
  async (_, thinkApi) => {
    try {
      const response = await AuthService.getNewToken();

      return response.data;
    } catch (e) {
      if (errorCatch(e) === 'jwt expired') {
        thinkApi.dispatch(logout());
      }
      return thinkApi.rejectWithValue(e);
    }
  }
);
