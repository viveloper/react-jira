import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { signout } from '../store/user/userSlice';
import { firebase } from '../firebase';

export default function Home() {
  const { email } = useAppSelector(({ user }) => user);

  const dispatch = useAppDispatch();
  const onLogout = () => {
    firebase.auth().signOut();
    dispatch(signout());
  };
  return (
    <div>
      <header>
        <span>{email}</span>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div>Home Page</div>
    </div>
  );
}
