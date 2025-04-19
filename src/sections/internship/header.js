import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";

const InternshipHeaderComp = () => {
  return (
    <Container className="internship-page">
      <Row className="mb-4">
        <Col>
          <h1>Internships offered by us</h1>
        </Col>
      </Row>
      <Row className="">
        <Col lg={6} md={12} className="mb-4">
          <div className="internship-item" id="intern-card1">
            <h2>Cyber Security Internship</h2>
            <p>
              Learn about network security, ethical hacking, and security
              protocols.
            </p>
            <ul>
              <li>Duration: 3 months</li>
              <li>Location: Remote/On-site</li>
              <li>Type: Full-time</li>
            </ul>
          </div>
        </Col>
        <Col lg={6} md={12} className="mb-4">
          <div className="internship-item">
            <h2>Digital Marketing Internship</h2>
            <p>Master social media marketing, SEO, and content strategy.</p>
            <ul>
              <li>Duration: 3 months</li>
              <li>Location: Remote/On-site</li>
              <li>Type: Full-time</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InternshipHeaderComp;
