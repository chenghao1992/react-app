

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory,hashHistory } from 'react-router';
import Routers from './routes/routes';
import configureStore from './stores';
const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={Routers} />
    </Provider>,
    document.getElementById('root')
);