/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import {render} from 'react-dom';
import { Hello } from './components/Hello';
import { App } from './components/App';
import { About } from './components/About';
import { Home } from './components/Home';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById("container")
);