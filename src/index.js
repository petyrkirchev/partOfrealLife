import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routes/Routes';

import './stylesheets/main.css';

Routes.loadRoutes();
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
