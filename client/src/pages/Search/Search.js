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
		cardsPerPage: 0,
		collegesShown: [],
		searchTerm: '',
	}

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = async () => {
		this.setState({
			colleges: [],
			pageIndex: 0,
			cardsPerPage: 1,
			collegesShown:[],
			searchTerm: ''
		});

		if(this.state.colleges.length === 0) {
			const collegeRes = await API.getAll();
			const collegeData = collegeRes.data;
			this.setState({
				colleges: collegeData.dbModel,
			});
			console.log(this.state.colleges)
		} else {
			return;
		};
	};

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	};
	
	handleSearchSubmit = async () => {

		let startIndex = 0 + this.state.pageIndex * this.state.cardsPerPage;
		let endIndex = 1 + this.state.pageIndex * this.state.cardsPerPage;
		let temArr = this.state.colleges.splice(startIndex,endIndex);
		temArr.forEach(async (ele) => {
			let collegeName = `${ele.collegeName} logo`;
			let collegeLogoURL = await API.getLogo(collegeName);
			console.log(collegeLogoURL)
		})
	};

	render() {

		return (
			<Container>
				<br/>
				<br/>

				<Row>
					<Col size="md-10">
						<Input
							name="searchTerm"
							placeholder="Search For Your College"
							value={this.state.searchTerm}
							onChange={this.handleInputChange}
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
