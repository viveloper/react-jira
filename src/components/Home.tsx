import React from 'react';
import { firebase } from '../firebase';

export default function Home() {
  const onLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <header>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div>Home Page</div>
    </div>
  );
}
