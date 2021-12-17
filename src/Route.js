import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {Home, About} from './App'

const Route = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </Router>
    )
}

export default Route; 