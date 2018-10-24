import React from "react";
import {Jumbotron,Row,Col} from "react-bootstrap";
import '../../hero.css';

const Hero = (props) => {
  return(
    <Row>
      <Col xs={12}>
        <Jumbotron>
          <h2>{props.supertitle}</h2>
          <p>{props.subtitle}</p>
          </Jumbotron>
      </Col>
      </Row>
  );
};
export default Hero;