import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import { firebase } from './firebase';

interface AppProps {}

function App({}: AppProps) {
  const isLogin = false;

  return (
    <div className="App">
      {!isLogin && <Login />}
      {isLogin && <Home />}
    </div>
  );
}

export default App;
