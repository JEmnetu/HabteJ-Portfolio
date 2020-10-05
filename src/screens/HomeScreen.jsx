import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import PageHeading from "../components/PageHeading";

const HomeScreen = () => {
  return (
    <>
      <div id="home">
        <PageHeading
          title="Jacob Habtemariam"
          subtitle="Full Stack Web Developer"
        />
      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <a
              href="https://github.com/JEmnetu"
              target="new"
              className="social-link"
            >
              <i className="fab fa-github fa-3x py-3 px-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/habtemariamje/"
              target="new"
              className="social-link"
            >
              <i className="fab fa-linkedin fa-3x py-3 px-3" />
            </a>
            <a
              href="mailto: j.habtema@gmail.com"
              target="new"
              className="social-link"
            >
              <i className="fas fa-envelope fa-3x py-3 px-3" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
