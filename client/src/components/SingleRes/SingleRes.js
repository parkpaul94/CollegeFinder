import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import SimpleMap from '../../components/SimpleMap';

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const SingleRes = (props) => (
    <Container>
      <Row>
        <Col size="md-3">
          <Thumbnail src={'' || "https://placehold.it/600x600"} />
        </Col>
        <Col size="md-3">
          <h1>{props.collegeName}</h1>
          <h2>{props.city}{props.state}</h2>
          <h2>{props.weblink}</h2>
        </Col>
        <Col size='md-6'>
          <SimpleMap lat={props.latitude} lng={props.longitude} text={props.collegeName}/>
        </Col>
      </Row>
      <Row><Col size='md-12'><h1>Quick Information</h1></Col></Row>
      <Row>
        <Col size='md-3'>
        <h1>Average Annual Cost</h1>
        <h2> $$ {props.annualAveCost}</h2>
        </Col>
        <Col size='md-3'>
        <h1>Graduation Rate</h1>
        <h2> {props.graduationRate} %</h2>
        </Col>
        <Col size='md-6'>
        <h1>Popular Programs</h1>
        <h3>1.{props.popularprogram}</h3>
        <h3>2.{props.popularprogram2}</h3>
        <h3>3.{props.popularprogram3}</h3>
        </Col>
      </Row>
      <Row><Col size='md-12'><h1>Tution</h1></Col></Row>
      <Row>
        <Col size='md-6'>
        <h1>In-State Tution</h1>
        <h2>$${props.annualInCost}</h2>
        </Col>
        <Col size='md-6'>
        <h1>Out-State Tution</h1>
        <h2>$${props.annualOutCost}</h2>
        </Col>
      </Row>
    </Container>
);

export default SingleRes;
