import React from 'react';
import { BrowserRouter as Router, Switch, Route} from './react-router-dom';
import Home from './Home';
import Solution from './Solution';

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Switch>

                 <Route exact path="/" component={Home} > </Route>
                 <Route exact path="/solution" component={Solution} > </Route>

            </Switch>
        </Router>
    </div>
  )
}
