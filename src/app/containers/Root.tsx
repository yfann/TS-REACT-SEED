import * as React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import {Router} from 'react-router';

export default class Root extends React.Component<any,{}>{
    render(){
        const {store,history}=this.props;
        return (
            <Provider store={store}>
                <div>
                <Router history={history} routes={routes} />
                </div>
            </Provider>
        );
    }
}
