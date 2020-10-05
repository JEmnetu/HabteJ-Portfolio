import React from "react";
import { Card, Button, Row } from "react-bootstrap";

const Project = ({ info }) => {
  return (
    <Card
      className="my-3 p-3 rounded"
      bg="primary"
      style={{
        color: "white",
        border: "solid 2px black",
        height: "30rem",
      }}
    >
      <a href={info.deploy} target="new">
        <Card.Img
          src={info.img}
          variant="top"
          height="200px"
          style={{ border: "solid 3px black" }}
        />
      </a>

      <Card.Body>
        <Card.Title as="div">
          <strong>{info.title}</strong>
        </Card.Title>

        <Card.Text as="p">{info.description}</Card.Text>
        {/* Fix this!! */}
        <Row className="d-flex justify-content-center align-items-end">
          <a href={info.repo} target="new">
            <Button>Code Repo</Button>
          </a>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Project;
