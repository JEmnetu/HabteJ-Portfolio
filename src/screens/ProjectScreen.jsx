import React from "react";
import projects from "../data/projects";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
} from "react-bootstrap";
import PageHeading from "../components/PageHeading";

const ProjectScreen = () => {
  return (
    <>
      <Container className="mb-4">
        <PageHeading
          title="Projects"
          text="Below you will find my personal projects, with links to the deployed applications as well as the code repos."
        />

        <ListGroup className="pt-4" variant="flush">
          {projects.map((project, index) => (
            <ListGroupItem
              key={index}
              className="my-2 rounded"
              style={{ border: "solid 1px #4d5656" }}
              variant="secondary"
            >
              {/* <Row></Row> */}
              <Row className="d-flex">
                <Col sm={12} md={5} lg={4}>
                  <Card>
                    <a href={project.deploy} target="new">
                      <Card.Title
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {project.title}
                      </Card.Title>
                    </a>
                    <a href={project.deploy} target="new">
                      <Card.Img
                        src={project.img}
                        height="200"
                        width="250"
                        alt="imc"
                        style={{ border: "solid 1px #4d5656" }}
                        className="rounded"
                      />
                    </a>
                  </Card>
                </Col>
                <Col
                  sm={12}
                  md={5}
                  lg={6}
                  className="d-flex align-items-center"
                >
                  <p> {project.description}</p>
                </Col>
                <Col
                  sm={12}
                  md={2}
                  lg={2}
                  className="d-flex align-items-center"
                >
                  <a href={project.repo} target="new">
                    {" "}
                    <Button className="btn btn-primary">Code Repo</Button>
                  </a>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default ProjectScreen;
