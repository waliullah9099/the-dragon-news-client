import React from "react";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
                <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2>This is main content</h2>
          </Col>
          <Col lg={3}>
                <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
