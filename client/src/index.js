import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
// import Products from './product/Product';
import * as serviceWorker from './serviceWorker';

//sends this to index.html which put it up to the page
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
