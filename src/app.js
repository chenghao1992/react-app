

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory } from 'react-router';
import Routers from './routes/routes';
import configureStore from './stores';
const store = configureStore();

render(
<div>2222</div>,
document.getElementById('root')
);