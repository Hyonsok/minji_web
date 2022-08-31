import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{ position: "relative", zIndex: "2" }}>
      <Container>
        <Navbar.Brand href="/" className="font-bold">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-xl p-3">
            <Nav.Link as={Link} to="/about" className="mr-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="mr-3">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="mr-3">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
