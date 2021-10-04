import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer/timer';
import Header from './Header/header';
import Todos from "./Todos/todos";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Timer />
    <Todos />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();