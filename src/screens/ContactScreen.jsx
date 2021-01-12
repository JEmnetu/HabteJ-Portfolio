import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PageHeading from "../components/PageHeading";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = { name, email, message };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact v2", ...submission }),
    })
      .then(() => {
        alert(
          "Thank you for reaching out! I will get back to you as soon as I can."
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error));
  };
  return (
    <div>
      <Container>
        <PageHeading title="Let's Connect!" />

        <Form name="contact v2" data-netlify="true" onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center">
            <input type="hidden" name="form-name" value="contact v2" />
            <Col md={5}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Label className="font-weight-bold">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  required
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={10}>
              <Form.Group>
                <Form.Label className="font-weight-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={7}
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col md={10}>
              <Button
                className="btn btn-primary"
                type="submit"
                id="contact-submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="d-flex justify-content-center mt-4">
          <Col xs={3} md={2} className="text-center">
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
          <Col xs={3} md={2} className="text-center">
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
        </Row>
      </Container>
    </div>
  );
};

export default ContactScreen;
