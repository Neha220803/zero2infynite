import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const FooterComp = () => {
  return (
    <div
      className=" text-white  position-fixed bottom-0 w-100"
      style={{
        zIndex: 1030,
        backgroundColor: "#275EAE",
        borderTop: "1px solid #fff",
      }}
    >
      <Container className="">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={6} className="right-margin py-2">
            <a
              href="https://wa.me/919600046662"
              className="text-white text-decoration-none d-flex justify-content-center align-items-center"
            >
              <FaWhatsapp className="me-2 footer-icons" id="whatsapp-icon" />
              Whatsapp us
            </a>
          </Col>
          <Col xs={6} className="mb-2 mb-md-0">
            <a
              href="https://wa.me/918111000953"
              className="text-white text-decoration-none d-flex justify-content-center align-items-center"
            >
              <div className="d-flex justify-content-center align-items-center">
                <FaPhone className="me-2 " />
                <span className="d-md-block d-none me-2">Call us </span> +91
                8111000953{" "}
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
