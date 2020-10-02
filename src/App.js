import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Container>
            <Route path="/about" exact component={AboutScreen} />
          </Container>
        </main>
      </div>
    </Router>
  );
};

export default App;
