import React from 'react';
import ReactDOM from 'react-dom/client';
import { BistrosApp } from './BistrosApp';

// SASS STYLES.
import './sass/normalize.scss';
import './sass/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BistrosApp />
  </React.StrictMode>
);
