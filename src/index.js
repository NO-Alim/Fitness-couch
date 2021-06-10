import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './Context/context'

ReactDOM.render(
  <React.Fragment>
    <AppProvider >
      <App />
    </AppProvider>
  </React.Fragment>,
  document.getElementById('root')
);

