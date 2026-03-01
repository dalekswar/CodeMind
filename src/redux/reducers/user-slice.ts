import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserStateType } from '../../types';

const authDataFromStorage = localStorage.getItem('authData');
const initialState: UserStateType = authDataFromStorage
  ? JSON.parse(authDataFromStorage)
  : {
      email: '',
      login: '',
    };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    registerUser(state, action: PayloadAction<UserStateType>) {
      state.email = action.payload.email;
      state.login = action.payload.login;

      localStorage.setItem('authData', JSON.stringify(action.payload));
    },

    logout(state) {
      state.email = '';
      state.login = '';
    },
  },
});

export const { registerUser, logout } = userSlice.actions;

export default userSlice.reducer;
