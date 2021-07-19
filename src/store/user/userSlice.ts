import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state
interface UserState {
  id: string;
}

// Define the initial state using that type
const initialState: UserState = {
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    signin: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    signout: (state) => {
      state.id = '';
    },
  },
});

export const { signin, signout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
