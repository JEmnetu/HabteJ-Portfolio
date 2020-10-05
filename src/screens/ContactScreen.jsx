import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageHeading from "../components/PageHeading";
const ContactScreen = () => {
  return (
    <div>
      <Container>
        {/* <Row>
          <Col md={12} className="text-center">
            <h1>Contact</h1>
            <h5>Contact me with any questions or concerns. Let's connect!</h5>
          </Col>
        </Row> */}
        <PageHeading
          title="Contact"
          text="Contact me with any questions or concerns. Let's connect!"
        />

        <Row className="d-flex justify-content-center align-items-center socials rounded">
          <Col md={4} className="text-center">
            <a
              href="https://github.com/JEmnetu"
              target="new"
              className="social-link"
            >
              <i className="fab fa-github fa-4x" />
              <br />
              Github
            </a>
          </Col>
          <Col md={4} className="text-center">
            <a
              href="https://www.linkedin.com/in/habtemariamje/"
              target="new"
              className="social-link"
            >
              <i className="fab fa-linkedin fa-4x" />
              <br />
              LinkedIn
            </a>
          </Col>
          <Col md={4} className="text-center">
            <a
              href="mailto: j.habtema@gmail.com"
              target="new"
              className="social-link"
            >
              <i className="fas fa-envelope fa-4x" />
              <br />
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactScreen;
