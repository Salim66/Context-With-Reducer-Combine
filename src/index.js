import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import MsgContextProviders from './providers/MsgContextProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsgContextProviders>
      <App />
    </MsgContextProviders>
  </React.StrictMode>
);
