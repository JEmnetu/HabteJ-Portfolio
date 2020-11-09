import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import SkillScreen from "./screens/SkillScreen";
import ContactScreen from "./screens/ContactScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={HomeScreen} />
        <main>
          <Container>
            <Route path="/about" exact component={SkillScreen} />
            <Route path="/contact" exact component={ContactScreen} />
            <Route path="/projects" exact component={ProjectScreen} />
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;
