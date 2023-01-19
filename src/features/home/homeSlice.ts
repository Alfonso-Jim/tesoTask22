import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { authRequest } from '../../api/api';

export interface HomeState {
  status: 'standby' | 'isLoading' | 'data' | 'error';
  tokenObj: { token: string };
  redirect: boolean;
  userNameError: boolean;
  userNameHelper: string;
  passwordError: boolean;
  passwordHelper: string;
}

const initialState: HomeState = {
  status: 'standby',
  tokenObj: { token: '' },
  redirect: false,
  userNameError: false,
  userNameHelper: '',
  passwordError: false,
  passwordHelper: '',
};

interface paramsInterface {
  username: string;
  password: string;
}

export const login = createAsyncThunk('home/login', async (params: paramsInterface) => {
  const { username, password } = params;
  const response = await authRequest({ username, password });
  return response.data;
});

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    clearUserErrors: (state) => {
      state.userNameError = initialState.userNameError;
      state.userNameHelper = initialState.userNameHelper;
    },
    clearPasswordErrors: (state) => {
      state.passwordError = initialState.passwordError;
      state.passwordHelper = initialState.passwordHelper;
    },
    clearRedirection: (state) => {
      state.redirect = initialState.redirect;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'isLoading';
        state.redirect = initialState.redirect;
        state.userNameError = initialState.userNameError;
        state.userNameHelper = initialState.userNameHelper;
        state.passwordError = initialState.passwordError;
        state.passwordHelper = initialState.passwordHelper;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ token: string }>) => {
        state.status = 'data';
        state.tokenObj = action.payload;
        localStorage.setItem('token', action.payload.token);
        state.redirect = true;
        state.userNameError = initialState.userNameError;
        state.userNameHelper = initialState.userNameHelper;
        state.passwordError = initialState.passwordError;
        state.passwordHelper = initialState.passwordHelper;
      })
      .addCase(login.rejected, (state) => {
        state.status = 'error';
        state.redirect = initialState.redirect;
        state.userNameError = true;
        state.userNameHelper = 'User not authorized';
        state.passwordError = true;
        state.passwordHelper = 'Password not authorized';
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearUserErrors, clearPasswordErrors, clearRedirection } = homeSlice.actions;

export const selectHomeSlice = (state: RootState) => state.homeSlice;

export default homeSlice.reducer;
