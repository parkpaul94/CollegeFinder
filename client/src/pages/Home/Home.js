import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Button from '../../components/Button'
import './Home.css';
import Jumbotron from "../../components/Jumbotron"
import Nav from "../../components/Nav";

class Home extends Component {

	render() {
		const style ={
			fontSize:'2.5em'
		};
		return (
		<div className="App">

<Container>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Welcome to College Finder!</h1>
          <h2>We are here to help you find the college that is for you!
			  <br/>Please feel free to search below for colleges or Sign up 
			  <br/>for our tailor college search program for Free! 
		  </h2>
		  <Button type="primary" className="input-lg">
			<Link to="/Search">Search For Colleges</Link> 
			</Button>
			
			<Button type="primary" className="input-lg">
			<Link to="/SignUp">Sign Up For An Account</Link>
			</Button>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
   </div>
		);
	}
}

export default Home;