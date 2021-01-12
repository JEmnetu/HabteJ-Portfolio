import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="sm">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>HabteJ</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/" id="home-link">
                <Nav.Link className="test">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about" id="about-link">
                <Nav.Link>Skills</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects" id="projects-link">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" id="contact-link">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
