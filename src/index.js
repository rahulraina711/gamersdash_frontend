import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import global_store from './global_store/config_store';
import {Provider} from 'react-redux';

const store = global_store();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);