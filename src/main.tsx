import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// eslint-disable-next-line react-refresh/only-export-components
const AppRoot = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  import.meta.env.MODE === 'development' ? (
    <AppRoot />
  ) : (
    <React.StrictMode>
      <AppRoot />
    </React.StrictMode>
  )
);
