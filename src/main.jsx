import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './Context/AuthContext';

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
