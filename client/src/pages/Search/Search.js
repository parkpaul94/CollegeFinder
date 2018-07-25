import React, { Component } from 'react';
import axios from 'axios';
import Collegecard from "../../components/Collegecard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

class Search extends Component {

	state = {
		colleges: [],
		pageIndex: 0,
	}

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = () => {
		this.setState({
			colleges: [],
			pageIndex: 0,
		});
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSearchSubmit = async () => {
		console.log('Clicked')
		const collegeRes = await API.getAll();
		const collegeData = collegeRes.data;
		console.log(collegeData);
	};


	render() {

		return (
			<Container>
				<br/>
				<br/>

				<Row>
					<Col size="md-10">
						<Input
							name="collegeSearch"
							placeholder="Search For Your College"
						/>
					</Col>
					<Col size="md-2">
						<Button
							onClick={this.handleSearchSubmit}
							type="success"
							className="input-lg"
						>
							Search
					  </Button>
					</Col>
				</Row>

				<Row>
					<Col size="md-4">
						<Collegecard btnText='View More Details'/>
					</Col>
				</Row>
			</Container>
		);
	}

};


export default Search;
