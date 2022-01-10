import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from "./context/Context";
import { CProvider } from './VideoChat/Context';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
    <CProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CProvider>
  </ContextProvider>,
  document.getElementById('root')
);

