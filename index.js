import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './src/app';
import reducer from './src/reducers';

const store = createStore(
    reducer,
    {
        selected: null,
        torrents: [],
        refreshing: false,
        fileDialogIsOpen: false
    },
    applyMiddleware(thunkMiddleware)
);

// Global Styles
import './assets/styles/bootstrap.css';
import './assets/styles/index.less';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
