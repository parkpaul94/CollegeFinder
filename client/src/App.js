import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Nav from "./components/Nav";
import Search from './pages/Search';
import SingleResult from "./pages/SingleResult";

const App = () => (
	<Router>
		<div>
		<Nav />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/Home" component={Home} />
			<Route exact path="/Login" component={Login} />
			<Route exact path="/Signup" component={Signup}/>
			<Route exact path="/Search" component={Search}/>
			<Route exact path="/SingleResult" component={SingleResult}/>
			<Route component={NoMatch} />
		</Switch>
		</div>
	</Router>
);

export default App;
