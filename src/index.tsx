import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';


// Рендерит корневой компонент App в элемент с id="root"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
