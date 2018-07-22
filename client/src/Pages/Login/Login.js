import React, { Component } from 'react'
import axios from 'axios'

import Login_Form from "../../components/Login_Form/Login_Form";
import Nav from "../../components/Nav";

class Login extends Component {
	render() {
		return (
			<Nav>
				<Login_Form />
			</Nav>
		);
	}
};

export default Login;