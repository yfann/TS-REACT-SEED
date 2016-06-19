import * as React from 'react';
import {Header} from './common/Header';

export class App extends React.Component<any,{}>{
    render(){
       return(
           <div>
            <Header/>
            <div classname="container-fluid">
            </div>
        </div>
       )     
    }
}