import { Hello } from './components/Hello';
import { App } from './components/App';
import { About } from './components/About';
import { Home } from './components/Home';
import { Route } from 'react-router'

export default (
    <Route path="/"  component={App}>
        <IndexRoute component={Home}/>
        <Route path="hello" component={Hello}/>
        <Route path="about" component={About}/>
    </Route>
)
