import React from "react";
import {Container, Row, Col } from "react-bootstrap";

const styleFooter = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};


export default function Footer() {
  return (  
    <Container fluid style={styleFooter}>
      <Row>
        <Col md={9} style={{display:'flex', justifyContent:'right'}}>  
          <p>Designed and developed by SMJHSNHJL</p>
        </Col>
        <Col md={2} style={{display:'flex', justifyContent:'right'}}>
          <p>Copyright © 2022</p>
        </Col>
        <Col md={1} style={{display:'flex', justifyContent:'left'}}>
          <p>Social icons</p>
        </Col>
      </Row>
    </Container>
  );
}
