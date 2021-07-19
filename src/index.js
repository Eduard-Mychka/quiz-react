import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App/App';
// import {createStore} from 'redux';
// const store = createStore()


const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
