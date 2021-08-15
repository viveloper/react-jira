import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import { worker } from './mocks/browser';
import './index.css';

if (import.meta.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
