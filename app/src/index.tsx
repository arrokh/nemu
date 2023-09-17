import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as dotenv from "dotenv";
import * as serviceWorker from './serviceWorker';
import './index.css';
const UUIDV4 = require('uuid/v4');

dotenv.config({
    path: '../.env'
});

if (!localStorage.getItem('nemu-uid'))
    localStorage.setItem('nemu-uid', UUIDV4());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
