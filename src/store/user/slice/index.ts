import { createSlice } from '@reduxjs/toolkit';

import { getStorageValue } from '@/packages/storage';

import { checkAuth, login, register } from '../actions';

export interface UserStateType {
  email: string;
}

export interface InitialUserStateType {
  user: UserStateType | null;
  isLoading: boolean;
}

const user = getStorageValue('user');

const initialState: InitialUserStateType = {
  user: user ? JSON.parse(user as string) : null,
  isLoading: false
};

const loadingCreatorSlice = (state: InitialUserStateType) => {
  state.isLoading = true;
};

const rejectCreatorSlice = (state: InitialUserStateType) => {
  state.isLoading = false;
  state.user = null;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, loadingCreatorSlice)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(register.rejected, rejectCreatorSlice)
      .addCase(login.pending, loadingCreatorSlice)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, rejectCreatorSlice)
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      });
  }
});
