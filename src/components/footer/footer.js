import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TelephoneFill, Calendar2CheckFill } from "react-bootstrap-icons";
import { FaWhatsapp } from "react-icons/fa";

const FooterComp = () => {
  return (
    <div
      className="bg-dark text-white py-2 position-fixed bottom-0 w-100"
      style={{ zIndex: 1030 }}
    >
      <Container className="">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={6}>
            <a
              href="https://wa.me/918111000953"
              className="text-white text-decoration-none"
            >
              <FaWhatsapp className="me-2" />
              Chat with us
            </a>
          </Col>
          <Col xs={6} className="mb-2 mb-md-0">
            <a
              href="https://wa.me/918111000953"
              className="text-white text-decoration-none"
            >
              <TelephoneFill className="me-2" />
              Call us at 8111000953
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
