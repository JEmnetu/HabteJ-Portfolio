import React from "react";
import { Row, Col } from "react-bootstrap";
const PageHeading = (props) => {
  return (
    <>
      <Row>
        <Col md={12} className="text-center pt-2">
          <h2 className="py-2">{props.title}</h2>
          <h4>{props.subtitle}</h4>
          <p id="about-details">{props.text}</p>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default PageHeading;
