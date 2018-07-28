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

    const collegeRes = await API.getSingleResult(this.props.match.params.id);
        const collegeData = collegeRes.data;
        let collegeName = `${collegeRes.data.collegeName}logo`;
        let logoAPIReturnObj = await API.getLogo(collegeName);
        let collegeLogoURL = logoAPIReturnObj.data.thumbnailUrl;
        Object.assign(collegeData,{'logoUrl': collegeLogoURL})
		console.log(collegeData);
		this.setState({
			college: collegeData
        });

    this.setState({hasResult:true});

	};

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
	};
	
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
                      latitude={this.state.college.location.lat}
                      longitude={this.state.college.location.lon}
                      image={this.state.college.logoUrl}

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