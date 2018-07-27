import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import SingleRes from "../../components/SingleRes";
import { Container, Row, Col } from "../../components/Grid";
import API from "../../utils/API";

class SingleResult extends Component{
  state = {
    college: {},
    hasResult: false,
	}

	componentDidMount() {
		this.loadDefault();
	};

	loadDefault = async () => {
		// this.setState({
		// 	college: []
    // });
    const collegeRes = await API.getSingleResult(this.props.match.params.id);
		const collegeData = collegeRes.data;
		console.log(collegeData);
		this.setState({
			college: collegeData
    });
    this.setState({hasResult:true});
    
  // console.log(this.props.match.params.id);
  

	// 	if(this.state.college.length === 0) {
	// 		const collegeRes = await API.getSingleResult(this.props.match.params.id);
	// 		const collegeData = collegeRes.data;
	// 		this.setState({
	// 			college: collegeData.dbModel,
	// 		});
	// 		console.log(this.state.colleges)
	// 	} else {
	// 		return;
	// 	};
	};

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	};
	
	// handleSearchSubmit = async () => {

	// 	// let startIndex = 0 + this.state.pageIndex * this.state.cardsPerPage;
	// 	// let endIndex = 1 + this.state.pageIndex * this.state.cardsPerPage;
	// 	// let temArr = this.state.colleges.splice(startIndex,endIndex);
	// 	// temArr.forEach(async (ele) => {
	// 	// 	let collegeName = `${ele.collegeName} logo`;
	// 	// 	let collegeLogoURL = await API.getLogo(collegeName);
	// 	// 	console.log(collegeLogoURL)
	// 	console.log('Clicked')
	// 	const collegeRes = await API.getSingleResult(this.props.match.params.id);
	// 	const collegeData = collegeRes.data;
	// 	console.log(collegeData);
	// 	this.setState({
	// 		college: collegeData.dbModel,
	// 	})
	// };


    render(){
        return(
    <Container>
        <Jumbotron>
            <Row>
                <Col size="xs-12">
              {!this.state.hasResult ? (
                <h1 className="text-center">Loading...</h1>
              ) : (
                <Container>
                      <SingleRes
                      key={this.state.college._id}
                      collegeName={this.state.college.collegeName}
                      city={this.state.college.city}
                      state={this.state.college.state}
                      weblink={this.state.college.weblink}
                      annualAveCost={this.state.college.annualAveCost}
                      graduationRate={this.state.college.graduationRate*100}
                      popularprogram={this.state.college.popularprogram[0]}
                      popularprogram2={this.state.college.popularprogram[1]}
                      popularprogram3={this.state.college.popularprogram[2]}
                      annualInCost={this.state.college.annualInCost}
                      annualOutCost={this.state.college.annualOutCost}
                      />
                </Container>
              )}
            </Col>
            </Row>
        </Jumbotron>
    </Container>
        )
    }
};

export default SingleResult;