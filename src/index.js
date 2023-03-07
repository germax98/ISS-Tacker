import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IssPositionProvider } from './contexts/issposition.context';
import { CurrentCountryProvider } from './contexts/country.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <IssPositionProvider>
      <CurrentCountryProvider>
        <App />
      </CurrentCountryProvider>
    </IssPositionProvider>
  </React.StrictMode>
);

reportWebVitals();
