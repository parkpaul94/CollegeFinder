import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => {
  const {
    title,
    href,
    thumbnail,
    ingredients
  } = props;

  return <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.children} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.children}</h3>
          <p>
            Ingredients: {props.children}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.children}
          >
            Go to recipe!
          </a>
        </Col>
      </Row>
    </Container>
  </li>;
}


