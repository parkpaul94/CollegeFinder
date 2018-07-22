import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from '../../components/Grid';

class SingleResult extends Component{
  render(){
    return (
    <Container fluid>

      <div className="container">

        <div className="row">
          <div className="col s3 text-center"><p>IMAGE</p></div>
          <div className="col s3 text-center"><p>INFO</p></div>
          <div className="col s2 text-center"><p>ICONS</p></div>
          <div className="col s4 text-center"><p>MAP</p></div>
        </div>

        <div className="row">

        </div>

      </div>

    </Container>
);}

  }

export default SingleResult;
