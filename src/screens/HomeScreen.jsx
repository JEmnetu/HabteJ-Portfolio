import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import PageHeading from "../components/PageHeading";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row
          className="d-flex justify-content-center"
          style={{ marginTop: "10em" }}
        >
          <Col sm={12} md={6} lg={4}>
            <img
              alt="profile img"
              src={"./images/mypic.jpg"}
              style={{ borderRadius: "10px" }}
              id="profileImg"
              height="200px"
              witdth="200px"
            />
          </Col>
          <Col sm={12} md={6} lg={8}>
            <h1 className="text-center main-title">Jacob Habtemariam</h1>
            <div className="subtitle-wrapper">
              <h2 className="text-center" style={{ color: "white" }}>
                Full Stack Web Developer
              </h2>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "3em" }}>
          <Col>
            <p className="text-center description">
              Self motivated Web Developer from Baltimore, Maryland with a
              passion for building web applications and overcoming challenges. I
              continue to learn about Software Development every day.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div id="home">
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
      </Container> */}
    </>
  );
};

export default HomeScreen;
