import React from "react";
import { Col, Row, Container } from "react-bootstrap";

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
                Web Developer
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
    </>
  );
};

export default HomeScreen;
