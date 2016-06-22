/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute,Redirect,hashHistory} from 'react-router';
import { DataTable } from './components/FixedDataTable';
import { App } from './components/App';
import { About } from './components/About';
import { Home } from './components/Home';
import {MateriaTest} from './components/MateriaTest';

render(
    (<Router history={hashHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Home}/>
            <Route path="table" component={ DataTable }/>
            <Route path="materiaUI" component={ MateriaTest }/>
            <Route path="about" component={About}/>
        </Route>
    </Router>),
    document.getElementById("container")
);