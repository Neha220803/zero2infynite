import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import CTADoorImg from "../../../assets/images/about-us/cta_door.png";
import "./AboutUsCTAPage.css";

const AboutUsCTAPage = () => {
  return (
    <div className="about-us-cta-section">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-column align-items-start">
            <div className="">
              <h2 className="text-white">
                Improve your cyber security skills with us
              </h2>
              <Button variant="primary">Join Now</Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              src={CTADoorImg}
              alt="Join Us Image"
              className="about-us-door-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsCTAPage;
