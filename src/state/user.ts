import { atom } from 'recoil';

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
  isLogin: boolean;
}

export const userState = atom<User>({
  key: 'userState',
  default: {
    email: '',
    accessToken: '',
    refreshToken: '',
    isLogin: false,
  },
});
