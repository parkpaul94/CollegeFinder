import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import FromGroup from "../../components/Signup_Form/FromGroup";
import { Col, Row, Container } from "../../components/Grid";



class Signup extends Component {

	state = {
		email: '',
		firstname: '',
		lastname: '',
		password: '',
		redirectTo: null
	};

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = () => {
		this.setState({
			email: '',
			firstname: '',
			lastname: '',
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

		if(this.state.firstname && this.state.lastname && this.state.email && this.state.password) {
			axios
			.post('/auth/signup', {
				password: this.state.password,
				email: this.state.email,
				firstname: this.state.firstname,
				lastname: this.state.lastname,
			})
			.then(response => {
				console.log(response.data);
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
			console.log(this.state.firstname && this.state.lastname && this.state.email && this.state.password)
			return;
		}

	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<Container>
				<div className="signup_container">
					<h3>Sign Up</h3>
					<form id="signup" name="signup" method="post" action="/signup">
						<Row>
							<div className="col s12">
								<Row>
									<FromGroup
										divClass='input-field col s6'
										iClass="material-icons prefix"
										iValue='person'
										name='firstname'
										lableName='First Name'
										id='firstname'
										key='firstname'
										aria=''
										value={this.state.firstname}
										onChange={this.handleInputChange}
									/>
									<FromGroup
										divClass='input-field col s6'
										iClass="material-icons prefix"
										iValue='person'
										name='lastname'
										lableName='Last Name'
										id='lastname'
										key='lastname'
										aria=''
										value={this.state.lastname}
										onChange={this.handleInputChange}
									/>
								</Row>
								<Row>
									<FromGroup
										divClass='input-field col s12'
										iClass="material-icons prefix"
										iValue='mail_outline'
										name='email'
										lableName='Email'
										id='email'
										key='email'
										aria='emailHelp'
										value={this.state.email}
										onChange={this.handleInputChange}
									/>
									<FromGroup
										divClass='input-field col s12'
										iClass="material-icons prefix"
										iValue='lock_outline'
										name='password'
										lableName='password'
										id='password'
										key='password'
										aria=''
										value={this.state.password}
										onChange={this.handleInputChange}
									/>
								</Row>
								<Row>
									<button id="reg_submit" className="btn waves-effect waves-light grey darken-4 btn-signup"
										onClick={(e) => this.handleFormSubmit(e)} type="submit" name="action">Submit
                            			    <i className="material-icons right">send</i>
									</button>
								</Row>
							</div>
						</Row>
					</form>
				</div>
			</Container>

		);
	}
}

export default Signup;