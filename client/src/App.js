import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/Home" component={Home} />
			<Route exact path="/Login" component={Login} />
			<Route component={NoMatch} />
		</Switch>
	</Router>
);

export default App;
