import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

// uncomment so that webpack can bundle styles
import styles from './stylesheets/app.scss';

render(
  <App />,
  document.getElementById('root')
);