import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Colleges from "./Pages/Colleges";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


const App = () => (
	<Router>
		<div>
      <Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Home" component={Home} />
				<Route exact path="/Colleges" component={Colleges} />
				<Route exact path="/Signup" component={Signup} />
				<Route exact path="/Login" component={Login} />

			</Switch>
		</div>
	</Router>
);

export default App;
