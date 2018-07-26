import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import SingleRes from "../../components/SingleRes";
import { Container, Row, Col } from "../../components/Grid";

class SingleResult extends Component{
	state = {
		colleges: [1,2,3]
	}

  componentDidMount() {
		this.loadDefault();
	};

	loadDefault = () => {
		this.setState({
			colleges: [1],
		});
	};

    render(){
        return(
    <Container>
        <Jumbotron>
            <Row>
                <Col size="xs-12">
              {!this.state.colleges.length ? (
                <h1 className="text-center">Loading...</h1>
              ) : (
                <Container>
                  {this.state.colleges.map(college => {
                    return (
                      <SingleRes
                      key={college.collegeName}
                      />
                    );
                  })}
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