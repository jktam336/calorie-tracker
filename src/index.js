import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

// uncomment so that webpack can bundle styles
import styles from './stylesheets/app.scss';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Route>
      <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);