import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TelephoneFill, Calendar2CheckFill } from "react-bootstrap-icons";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const FooterComp = () => {
  return (
    <div
      className=" text-white py-3 position-fixed bottom-0 w-100"
      style={{ zIndex: 1030, backgroundColor: "#275EAE" }}
    >
      <Container className="">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={6}>
            <a
              href="https://wa.me/918111000953"
              className="text-white text-decoration-none d-flex justify-content-center align-items-center"
            >
              <FaWhatsapp className="me-2 footer-icons" />
              Chat with us
            </a>
          </Col>
          <Col xs={6} className="mb-2 mb-md-0">
            <a
              href="https://wa.me/918111000953"
              className="text-white text-decoration-none d-flex justify-content-center align-items-center"
            >
              <FaPhone className="me-2 " />
              <span className="d-md-block d-none">Call us at </span>8111000953
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
