import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style';
import {Routers} from './routers';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

