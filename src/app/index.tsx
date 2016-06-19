///<reference path="../../typings/main.d.ts"/>

import * as React from 'react';
import {render} from 'react-dom';
import { HelloComponent } from './components/Hello';
import {Router,Route,Link,IndexRoute,Redirect,browserHistory} from 'react-router';

render(
    <HelloComponent compiler="TypeScript" framework="React" />,
    document.getElementById("container")
);