import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './reducers';
import { Provider } from 'react-redux'; //react component 
import { createStore } from 'redux'; // storage for the state of the app {an object}

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer); //application level store
const rootElement = document.getElementById('root');
ReactDOM.render( <Provider store={store}>< App /></Provider> , rootElement); //provider has a property 'store' and wrapped around the App