import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { firebase } from './firebase';
import { useAppSelector } from './store';

interface AppProps {}

function App({}: AppProps) {
  const isLogin = useAppSelector(({ user }) => user.isLogin);

  return (
    <div className="App">
      {!isLogin && <Login />}
      {isLogin && <Home />}
    </div>
  );
}

export default App;
