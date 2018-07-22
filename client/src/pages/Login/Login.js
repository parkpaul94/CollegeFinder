import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Nav from "../../components/Nav";

class Login extends Component {
	state = {
		loggedIn: false,
		user: null
	};

	render() {
		return (
			<div className="App">
				<h1>This is the main App component</h1>
			</div>
		)
	}
}

export default Login
