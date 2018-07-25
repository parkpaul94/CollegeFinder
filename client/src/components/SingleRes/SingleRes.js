import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const SingleRes = (props) => (
    <Container>
      <Row>
        <Col size="md-3">
          <Thumbnail src={props.thumbnail || "https://placehold.it/600x600"} />
        </Col>
        <Col size="md-3">
          <h1>University{props.title}</h1>
          <h2>State: {props.state}</h2>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to recipe!
          </a>
        </Col>
      </Row>
    </Container>
);

export default SingleRes;
