import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { signout } from '../store/user/userSlice';
import { firebase } from '../firebase';
import axios from 'axios';

export default function Home() {
  const { email } = useAppSelector(({ user }) => user);

  useEffect(() => {
    axios
      .get('/sample')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
