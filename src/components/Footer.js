import React from "react";
import {Container, Row, Col } from "react-bootstrap";

const styleFooter = {
  textAlign: "center",
  padding: "11px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontSize: "1em", 
  color:"white",
};


export default function Footer() {
  return (  
    <Container fluid style={styleFooter}>
      <Row>
        <Col md={10} style={{display:'flex', justifyContent:'right'}}>  
          <p>Designed and developed by NaJeonLee</p>
        </Col>
        <Col md={2} >
          <p>Copyright © 2022</p>
        </Col>
      </Row>
    </Container>
  );
}
