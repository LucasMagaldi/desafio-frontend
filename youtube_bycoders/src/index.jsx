import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
    
  </React.StrictMode>
);
