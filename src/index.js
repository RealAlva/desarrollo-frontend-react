import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';  
import { Provider } from 'react-redux';

import App from './App';  // Asegúrate de importar tu componente App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />  {/* Usamos App directamente */}
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
