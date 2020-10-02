import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const AboutScreen = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="text-center pt-2">
            <h2 className="py-4">About Me</h2>

            <p id="about-details">
              Self motivated Web Developer from Baltimore, Maryland with a
              passion for building web applications and overcoming challenges. I
              continue to learn about Software Development every day.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center pt-5">
            <h2 className="pt-5">Skills</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center py-3">
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-laptop fa-3x" />
              </ListGroupItem>
              <ListGroupItem variant="light">Frontend</ListGroupItem>
              <ListGroupItem variant="light">HTML 5</ListGroupItem>
              <ListGroupItem variant="light">CSS 3</ListGroupItem>
              <ListGroupItem variant="light"> Bootstrap</ListGroupItem>
              <ListGroupItem variant="light">Javascript</ListGroupItem>
              <ListGroupItem variant="light">JQuery</ListGroupItem>
              <ListGroupItem variant="light"> React</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-file-code fa-3x" />
              </ListGroupItem>
              <ListGroupItem variant="light">Backend</ListGroupItem>
              <ListGroupItem variant="light"> Node JS</ListGroupItem>
              <ListGroupItem variant="light">Express</ListGroupItem>
              <ListGroupItem variant="light">REST APIs</ListGroupItem>
              <ListGroupItem variant="light">MongoDB</ListGroupItem>
              <ListGroupItem variant="light">GraphQL</ListGroupItem>
              <ListGroupItem variant="light">AWS Amplify</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-users fa-3x" />
              </ListGroupItem>
              <ListGroupItem variant="light">Other Skills</ListGroupItem>
              <ListGroupItem variant="light">
                Responsive Web Development
              </ListGroupItem>
              <ListGroupItem variant="light">Git Version Control</ListGroupItem>
              <ListGroupItem variant="light"> Agile Methodology</ListGroupItem>
              <ListGroupItem variant="light">
                Remote Collaboration
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        {/* <Row className="d-flex justify-content-center mt-5">
          <Col
            md={5}
            style={{ background: "red" }}
            className="pt-4 mx-2 text-center"
          >
            Test
            <Row>Test 1</Row>
            <Row>Test2</Row>
          </Col>
          <Col
            md={5}
            style={{ background: "red" }}
            className="pt-4 mx-2 text-center"
          >
            Test
            <Row>Test 1</Row>
            <Row>Test2</Row>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default AboutScreen;
