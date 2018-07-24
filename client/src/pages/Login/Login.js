import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import FromGroup from "../../components/Signup_Form/FromGroup";
import { Col, Row, Container } from "../../components/Grid";

import './Login.css'

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
		console.log('Click')
		if (this.state.email && this.state.password) {
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
							redirectTo: '/Home'
						})
					} else {
						console.log('Auth API return error')
					}
				})
		} else {
			console.log('Somnething went wrong!')
			return;
		}

	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		
		return (
			<Container>
				<div className="login_container">
					<h3>Log In</h3><hr />
					<form id="signin" name="signin" method="post" action="/auth/login">
				<Row>
					<Col size="md-12">
						<Row>
							<FromGroup
								divClass='input-field col s12'
								iClass="material-icons prefix"
								iValue='mail_outline'
								name='email'
								lableName='Email Address'
								id='email'
								key='email'
								aria='emailHelp'
								value={this.state.email}
								onChange={this.handleInputChange}
							/>
						</Row>
						<Row>
							<FromGroup
								divClass='input-field col s12'
								iClass="material-icons prefix"
								iValue='lock_outline'
								name='password'
								lableName='Password'
								id='password'
								key='password'
								aria=''
								value={this.state.password}
								onChange={this.handleInputChange}
							/>
						</Row>
						
						<Row>
							<button type="submit" 
							        className="btn btn-login btn-primary waves-effect waves-light col s12" 
									onClick={(e) => this.handleFormSubmit(e)} >Login
							</button>
						</Row>
					</Col>
				</Row>
					</form>
				</div>
			</Container>

		);
	}
};

export default Login;
//checking comments