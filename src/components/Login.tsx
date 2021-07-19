import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { signin } from '../store/user/userSlice';
import { firebase } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // The `state` arg is correctly typed as `RootState` already
  const dispatch = useAppDispatch();

  const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      dispatch(signin(user?.uid ?? ''));
      console.log('user', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);
    }
  };

  // TODO: react-hook-form
  return (
    <div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
}
