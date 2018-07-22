import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Signup_Form from "../../components/Signup_Form/Signup_Form";

class Signup extends Component {

	state = {
		email: '',
		firstname: '',
		lastname: '',
		password: '',
		confirmPassword: '',
		redirectTo: null
	};

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	handleSubmit(event) {
		event.preventDefault();
		axios
			.post('/auth/signup', {
				password: this.state.password,
				email: this.state.email,
				firstname: this.state.firstname,
				lastname: this.state.lastname,
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
	};



	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<Signup_Form />
		);
	}
}

export default Signup;