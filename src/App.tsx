import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { firebase } from './firebase';

interface AppProps {}

function App({}: AppProps) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('login user', user);
        const uid = user.uid;
        setIsLogin(true);
      } else {
        // User is signed out
        console.log('logout user');
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {!isLogin && <Login />}
      {isLogin && <Home />}
    </div>
  );
}

export default App;
