import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";


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

export default App;
