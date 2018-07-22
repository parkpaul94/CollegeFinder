import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";

// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";

class Home extends Component {
	render() {
		return (
			<Nav> 
			<Container fluid>
				<Row>
					<Col size="md-12">
						{/* <Jumbotron>
                        <div class="col s6 one"><i class="material-icons logo">school</i></div>
						</Jumbotron> */}
					</Col>
				</Row>
				<Row>
					<Col size="md-10 md-offset-1">
						{/* <article>
							<h1>Synopsis</h1>
							<p>
								{this.state.book.synopsis}
							</p>
						</article> */}
					</Col>
				</Row>
				<Row>
					<Col size="md-2">
						<Link to="/">← Back to Authors</Link>
					</Col>
				</Row>
			</Container>
			</Nav>
		);
	}
}

export default Home;
