import React  from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import SignupForm from './components/SignupForm'

import NoMatch from './pages/NoMatch';

const App = () => (
  <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignupForm} />
        {/* <Route exact path='/books' component={Books} />
        <Route exact path='/books/:id' component={Detail} /> */}
        <Route component={NoMatch} />
      </Switch>
  </Router>
)

export default App;