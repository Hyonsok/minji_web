import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFileEarmarkPpt } from "react-icons/bs";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col className="hidden justify-center sm:block">
          <p className="flex justify-center">Designed and developed by </p>
        </Col>
        <Col className="hidden justify-center sm:block">
          <p className="flex justify-center">Copyright © 2022</p>
        </Col>
        <Col className="flex justify-center">
          <Row className="inline-block">
            <a
              href="https://github.com/TripToCodes"
              target="_blank"
              rel="noreferrer"
              className="w-auto"
            >
              <AiFillGithub className="text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/somi-jeon/"
              target="_blank"
              rel="noreferrer"
              className="w-auto"
            >
              <FaLinkedinIn className="text-black" />
            </a>
            <a
              href="https://github.com/codestates/HappyDeving/blob/dev3/README_en.md"
              target="_blank"
              rel="noreferrer"
              className="w-auto"
            >
              <BsFileEarmarkPpt className="text-black" />
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
