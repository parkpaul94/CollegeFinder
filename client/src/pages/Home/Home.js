import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from '../../components/Button'
import './Home.css';
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav";

// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

class Home extends Component {

	render() {
		const style ={
			fontSize:'2.5em'
		};


		return (
		<div className="App">
			<Container fluid>
				<Row>
				<Col size="md-7">
					<img src={require("./College.jpg")}/>
				</Col>
					<Col size="md-5">
						<Row/>
						<Row>
							<a style={style}>Looking for colleges is hard. 
							We are here to help!
							Let’s make your next 4 years 
							an adventure to remember !!</a>
						</Row>
						<Row>
							<Button type="primary" className="input-lg">
							<Link to="/Search">Search For Colleges</Link> 
							</Button>
							
							<Button type="primary" className="input-lg">
							<Link to="/SignUp">Sign Up For An Account</Link>
							</Button>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
		);
	}
}

export default Home;