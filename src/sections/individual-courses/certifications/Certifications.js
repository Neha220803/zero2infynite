import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import stuCerti from "../../../assets/images/indi_course/stu_certi.png";
import "./Certifications.css";

const CertificationsComp = () => {
  return (
    <section id="certifications">
      <Container>
        <Row className="justify-content-start mb-4">
          <h2 className="indi-section-title mb-4">Certifications</h2>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h3>Ec-Council CEH certification and Exams</h3>
            <p className="certification-paragraph">
              We are the only institute offering low-cost EC-Council CEH
              certification with placement assistance, career shift guidance,
              hands-on training, and industry-standard curriculum. All our
              students have successfully cleared their exams. We’ve updated the
              EC-Council license image and a sample EC-Council certificate on
              this page for your reference. Students who opt for training only
              will receive customized sessions along with a Zero2infynite
              certification.
            </p>
            <p className="certification-paragraph">
              On right side of the above text update the following image. Then
              blur the name, renewable on and its date, certificate number la
              mattum partial aah number aah.
            </p>
          </Col>
          <Col xs={12} md={6} className="certification-image-container">
            <Image
              src={stuCerti}
              alt="Certification Image"
              className="certification-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CertificationsComp;
