import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <p>Designed and developed by </p>
        </Col>
        <Col>
          <p>Copyright © 2022</p>
        </Col>
        <Col>
          <p>Social icons</p>
        </Col>
      </Row>
    </Container>
  );
}
