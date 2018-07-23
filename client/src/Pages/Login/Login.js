import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import FromGroup from "../../components/Signup_Form/FromGroup";
import Login_Form from "../../components/Login_Form/Login_Form";
import Nav from "../../components/Nav";

class Login extends Component {

	state = {
		email: '',
		password: '',
		redirectTo: null
	};

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = () => {
		this.setState({
			email: '',
			password: '',
  			redirectTo: null
		});
	};

	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	};
	
	handleFormSubmit(event) {

		event.preventDefault();

		if(!this.state.email && !this.state.password) {
			axios
			.post('/auth/signin', {
				password: this.state.password,
				email: this.state.email,
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('Auth API return good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('Auth API return error')
				}
			})
		} else {
			console.log( this.state.email && this.state.password)
			return;
		}

	};

	render() {
		return (
			<Login_Form />
		);
	}
};

export default Login;