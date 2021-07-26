import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UserState {
  uid: string;
  email: string;
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: false,
  uid: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<Omit<UserState, 'isLogin'>>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.isLogin = true;
    },
    signout: (state) => {
      state.uid = '';
      state.email = '';
      state.isLogin = false;
    },
  },
});

export const { signin, signout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
