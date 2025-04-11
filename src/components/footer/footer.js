import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TelephoneFill, Calendar2CheckFill } from "react-bootstrap-icons";

const FooterComp = () => {
  return (
    <div
      className="bg-dark text-white py-2 position-fixed bottom-0 w-100"
      style={{ zIndex: 1030 }}
    >
      <Container className="">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={6} className="mb-2 mb-md-0">
            <TelephoneFill className="me-2" />
            Call us at 6584978550
          </Col>
          <Col xs={6}>
            <Calendar2CheckFill className="me-2" />
            Request a call back
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
