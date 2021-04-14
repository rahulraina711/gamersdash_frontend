import React from 'react';
import ReactDOM from 'react-dom';
import global_store from './global_store/config_store';
import {Provider} from 'react-redux';
import Router from './Router';

const store = global_store();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    ,
    document.getElementById('root')
);