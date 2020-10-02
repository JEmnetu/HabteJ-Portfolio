import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <i className="fab fa-github fa-3x py-3 px-3" />
            <i className="fab fa-linkedin fa-3x py-3 px-3" />
            <i className="fas fa-envelope fa-3x py-3 px-3" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
