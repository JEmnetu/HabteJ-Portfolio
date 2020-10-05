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
import Project from "../components/Project";
import PageHeading from "../components/PageHeading";

const ProjectScreen = () => {
  return (
    <>
      <Container>
        {/* <Row className="d-flex justify-content-center pt-4">
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} xl={4} className="text-center my-4 ">
            <Project info={project} />
          </Col>
        ))}
     
      </Row> */}

        <PageHeading
          title="Projects"
          text="Below you will find some of my personal projects, with links to the deployed applications as well as the code repos."
        />

        <ListGroup className="pt-4" variant="flush">
          {projects.map((project) => (
            <ListGroupItem
              className="my-2 rounded"
              style={{ border: "solid 1px #4d5656" }}
              variant="secondary"
            >
              <Row className="d-flex">
                <Col sm={12} md={5} lg={4}>
                  <a href={project.deploy} target="new">
                    <img
                      src={project.img}
                      height="200"
                      width="250"
                      alt="imc"
                      style={{ border: "solid 1px #4d5656" }}
                      className="rounded"
                    />
                  </a>
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
                    <Button>Code Repo</Button>
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
