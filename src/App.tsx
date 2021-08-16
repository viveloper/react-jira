import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './components/Login';
import Home from './components/Home';
import { userState } from './state/user';

interface AppProps {}

function App({}: AppProps) {
  const user = useRecoilValue(userState);

  return (
    <div className="App">
      {!user.isLogin && <Login />}
      {user.isLogin && <Home />}
    </div>
  );
}

export default App;
