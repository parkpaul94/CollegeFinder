import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import SingleRes from "../../components/SingleRes";
import { Container, Row, Col } from "../../components/Grid";

class SingleResult extends Component{
    render(){
        return(
    <Container>
        <Jumbotron>
            <Row>
                <SingleRes/>
            </Row>
        </Jumbotron>
    </Container>
        )
    }
};

export default SingleResult;