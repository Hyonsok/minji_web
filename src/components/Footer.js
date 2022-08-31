import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const styleFooter = {
  textAlign: "center",
  position: "fixed",
  bottom: "0",
  fontSize: "1.2em",
  color: "white",
};

export default function Footer() {
  return (
    <Container fluid style={styleFooter} className="footer">
      <Row>
        <Col xs={11} md={10} style={{ display: "flex", justifyContent: "right" }}>
          <p>Designed and developed by NaJeonLee</p>
        </Col>
        <Col xs={12} md={2}>
          <p>Copyright © 2022</p>
        </Col>
      </Row>
    </Container>
  );
}
