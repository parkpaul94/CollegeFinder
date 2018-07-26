import React, { Component } from 'react';
import Collegecard from "../../components/Collegecard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

class Search extends Component {

	state = {
		colleges: [],
		pageIndex: 0,
		collegesShown: [],
	}

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = () => {
		this.setState({
			colleges: [],
			pageIndex: 0,
			collegesShown:[],
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
		this.setState({ colleges: [collegeData] })
		console.log(collegeData);
		this.setState({
			colleges: collegeData,
		})
	};

	render() {

		return (
			<Container>
				<br />
				<br />

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
							type="primary"
							className="input-lg"
						>
							Search
					  </Button>
					</Col>
				</Row>

				<Row>
					<Col size="md-12">
						<Col size="md-12">
							{!this.state.colleges.length ? (
								<h1 className="text-center">Please Search for Colleges</h1>
							) : (
								<Col size="md-4">
									<Container>
										{this.state.colleges.map(college => {
											return (
												<Collegecard
													key={college.collegeName}
												/>
											);
										})}
									</Container>
								</Col>
								)}
						</Col>
					</Col>
				</Row>


			</Container>
		);
	}

};


export default Search;
