import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

class Home extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<h1> This is the home page </h1>
				</Row>
			</Container>
		);
	}
}

export default Home;