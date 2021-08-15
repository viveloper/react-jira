import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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

  const onLogout = () => {};

  return (
    <div>
      <header>
        <span>{'Email'}</span>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div>Home Page</div>
    </div>
  );
}
