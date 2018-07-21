import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";

<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home'

import NoMatch from './pages/NoMatch';

const App = () => (
  <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/signup' component={SignupForm} /> */}
        {/* <Route exact path='/books' component={Books} />
        <Route exact path='/books/:id' component={Detail} /> */}
        <Route component={NoMatch} />
      </Switch>
  </Router>
)
=======

const App = () => (
	<Router>
		<div>
      <Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Home" component={Home} />
			</Switch>
		</div>
	</Router>
);
>>>>>>> master

export default App;
