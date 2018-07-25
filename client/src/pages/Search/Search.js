import React, { Component } from 'react';
import axios from 'axios';
import College from "../../components/College/College";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
// import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

class Search extends Component {

	state ={
		showColleges: false
	}


	toggleCollegeSearch = () =>{
	const doesSearch = this.state.showColleges;
	this.setState({showColleges:!doesSearch})
	}


	render() {

		return (
			<div>
			<Jumbotron>
			<Container>
			  <Row>
			    <Col size="md-12">
				{/* <form> */}
				  <Container>
				    <Row>
					<Col size="md-10">
					  <Input
					    name="collegeSearch"
					//     value={this.state.recipeSearch}
					//     onChange={this.handleInputChange}
					    placeholder="Search For Your College"
					  />
					</Col>
					<Col size="md-2">
					<Link to="/SingleResult">
					  <Button
					    onClick={this.toggleCollegeSearch}
					    type="success"
					    className="input-lg"
					  >
					    Search
					  </Button>
						</Link>
					</Col>
				    </Row>
				  </Container>
				{/* </form> */}
			    </Col>
			  </Row>
			</Container>
			</Jumbotron>
		    </div>
		);
	}
};

export default Search;
{/* <Row>
  <Col size="xs-12">
    {!this.state.recipes.length ? (
	<h1 className="text-center">No Recipes to Display</h1>
    ) : (
	<RecipeList>
	  {this.state.recipes.map(recipe => {
	    return (
		<RecipeListItem
		  key={recipe.title}
		  title={recipe.title}
		  href={recipe.href}
		  ingredients={recipe.ingredients}
		  thumbnail={recipe.thumbnail}
		/>
	    );
	  })}
	</RecipeList>
    )}
  </Col>
</Row> */}