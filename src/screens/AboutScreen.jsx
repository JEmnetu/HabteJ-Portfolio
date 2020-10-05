import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import PageHeading from "../components/PageHeading";

const AboutScreen = (props) => {
  return (
    <>
      <Container>
        <PageHeading
          title="About Me"
          text="Self motivated Web Developer from Baltimore, Maryland with a
              passion for building web applications and overcoming challenges. I
              continue to learn about Software Development every day."
        />
        <Row>
          <Col md={12} className="text-center ">
            <h2 className="pt-2">Skills</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center py-3">
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-laptop fa-3x mb-1" />
                <br />
                <span>Frontend</span>
              </ListGroupItem>

              <ListGroupItem variant="secondary">HTML 5</ListGroupItem>
              <ListGroupItem variant="secondary">CSS 3</ListGroupItem>
              <ListGroupItem variant="secondary"> Bootstrap</ListGroupItem>
              <ListGroupItem variant="secondary">Javascript</ListGroupItem>
              <ListGroupItem variant="secondary">JQuery</ListGroupItem>
              <ListGroupItem variant="secondary"> React</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-file-code fa-3x mb-1" />
                <br />
                <span>Backend</span>
              </ListGroupItem>

              <ListGroupItem variant="secondary"> Node JS</ListGroupItem>
              <ListGroupItem variant="secondary">Express</ListGroupItem>
              <ListGroupItem variant="secondary">REST APIs</ListGroupItem>
              <ListGroupItem variant="secondary">MongoDB</ListGroupItem>
              <ListGroupItem variant="secondary">GraphQL</ListGroupItem>
              <ListGroupItem variant="secondary">AWS Amplify</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="text-center pt-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <i className="fas fa-users fa-3x mb-1" />
                <br />
                <span>Other Skills</span>
              </ListGroupItem>

              <ListGroupItem variant="secondary">
                Responsive Web Development
              </ListGroupItem>
              <ListGroupItem variant="secondary">
                Git Version Control
              </ListGroupItem>
              <ListGroupItem variant="secondary">
                {" "}
                Agile Methodology
              </ListGroupItem>
              <ListGroupItem variant="secondary">
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
