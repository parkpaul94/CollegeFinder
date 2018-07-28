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
		notice: ''
	}

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = async () => {

		this.setState({
			colleges: [],
			pageIndex: 0,
			cardsPerPage: 9,
			collegesShown: [],
			searchTerm: '',
			notice: 'Please click to search for colleges'
		});

		if (this.state.colleges.length === 0) {
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

		this.setState({
			notice: ''
		});
		let startIndex = 0 + this.state.pageIndex * this.state.cardsPerPage;
		let endIndex = 9 + this.state.pageIndex * this.state.cardsPerPage;
		let temArr = [...this.state.colleges];
		let currArr = temArr.slice(startIndex, endIndex);

		currArr.map(async function (ele, index) {
			let collegeName = `${currArr[index].collegeName} logo`;
			let logoAPIReturnObj = await API.getLogo(collegeName);
			let collegeLogoURL = logoAPIReturnObj.data.thumbnailUrl;
			currArr[index] = Object.assign(currArr[index], { 'logoUrl': collegeLogoURL })
		})

		this.setState({
			collegesShown: currArr
		});

	};

	handlePreviousPageSubmit = async () => {

		if (this.state.collegesShown.length === 0) {
			this.setState({
				notice: 'Please click to search for colleges'
			});
		}
		else if (this.state.pageIndex === 0) {
			this.setState({
				notice: 'This is the first page'
			});
			return;
			
		} else {
			this.setState({
				notice: '',
				pageIndex: this.state.pageIndex-1,
				collegesShown: []
			});

			let startIndex = 0 + this.state.pageIndex * this.state.cardsPerPage;
			let endIndex = 9 + this.state.pageIndex * this.state.cardsPerPage;
			console.log(`The Start Index is ${startIndex} and the End index is ${endIndex}`)
			let temArr = [...this.state.colleges];
			let currArr = temArr.slice(startIndex, endIndex);
			console.log(currArr);

			currArr.forEach(async function (ele, index) {
				let collegeName = `${currArr[index].collegeName} logo`;
				let logoAPIReturnObj = await API.getLogo(collegeName);
				let collegeLogoURL = logoAPIReturnObj.data.thumbnailUrl;
				currArr[index] = Object.assign(currArr[index], { 'logoUrl': collegeLogoURL })
			})

			this.setState({
				collegesShown: currArr
			});
		}
	};


	handleNextPageSubmit = async () => {

		if (this.state.collegesShown.length === 0) {
			this.setState({
				notice: 'Please click to search for colleges'
			});
		}

		else if ( this.state.pageIndex === (this.state.colleges.length / 9 - 1)) {
			this.setState({
				notice: 'This is the last page'
			});
			return;
		} else {
			this.setState({
				notice: '',
				pageIndex: this.state.pageIndex+1,
				collegesShown: []
			});

			let startIndex = 0 + this.state.pageIndex * this.state.cardsPerPage;
			let endIndex = 9 + this.state.pageIndex * this.state.cardsPerPage;
			console.log(`The Start Index is ${startIndex} and the End index is ${endIndex}`)

			let temArr = this.state.colleges;

			temArr = temArr.slice(startIndex, endIndex);

			temArr.forEach(async function (ele, index) {
				let collegeName = `${temArr[index].collegeName} logo`;
				let logoAPIReturnObj = await API.getLogo(collegeName);
				let collegeLogoURL = logoAPIReturnObj.data.thumbnailUrl;
				temArr[index] = Object.assign(temArr[index], { 'logoUrl': collegeLogoURL })
			})

			this.setState({
				collegesShown: temArr
			});
		}
	};

	render() {

		return (
			<Container>
				<br />
				<br />

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
							type="primary"
							className="input-lg"
						>
							Search
					  </Button>
					</Col>

				</Row>

				<Row>
					<Col size='md-3'>
					</Col>
					<Col size="md-3">
						<Button
							onClick={this.handlePreviousPageSubmit}
							type="sucess"
							className="input-lg"
						>
							Previous Page
					  </Button>
					</Col>
					<Col size="md-3">

						<Button
							onClick={this.handleNextPageSubmit}
							type="success"
							className="input-lg"
						>
							Next Page
					  </Button>
					</Col>
					<Col size='md-3'>
					</Col>

				</Row>

				<h1 className="text-center">{this.state.notice}</h1>

				<div>

					<div style={{
						display: 'flex',
						flexWrap: 'wrap'
					}}>
						{this.state.collegesShown.map((college, i) => {
							return (

								<Collegecard
									key={i}
									img={college.logoUrl}
									id={college._id}
									collegeName={college.collegeName}
									state={college.state}
									annualAveCost={college.annualAveCost}
									weblink={college.weblink}
								/>

							);
						})}
					</div>

				</div>


			</Container>
		);
	}

};


export default Search;
