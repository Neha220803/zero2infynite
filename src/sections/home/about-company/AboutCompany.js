import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import student1 from "../../../assets/images/avathar2.png";

const AboutCompanySection = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* Left Side: About Zero2Infynite */}
        <Col md={8}>
          <h2 className="text-primary fw-bold">
            Welcome to Zero2Infynite – Empowering the Future of Cybersecurity
          </h2>
          <p className="mt-3">
            At Zero2Infynite, we are more than just a cybersecurity training
            company — we are your gateway to a secure digital future. Our
            mission is to transform passionate learners into skilled
            professionals, guiding them from zero knowledge to infinite
            potential in the ever-evolving world of cybersecurity.
          </p>
          <p>
            We offer comprehensive, hands-on training programs designed by
            industry experts, tailored to meet real-world demands. Whether
            you're a beginner or an experienced professional, our curriculum
            ensures you gain the technical expertise, critical thinking, and
            practical skills needed to thrive in today’s threat landscape.
          </p>
          <p>
            But we don’t stop at training. Our robust placement assistance
            connects you with top employers, helping you land roles in
            penetration testing, security operations, compliance, cloud
            security, and more. Additionally, we offer professional
            cybersecurity services to businesses, securing digital
            infrastructures with advanced threat detection, incident response,
            and risk management solutions.
          </p>
          <p>
            <strong>Join Zero2Infynite</strong> — where your journey from
            learning to leading in cybersecurity begins.
          </p>

          <h4 className="mt-4 text-primary fw-bold">
            Why Choose Zero2Infynite?
          </h4>
          <ul>
            <li>
              Over <strong>1,00,000</strong> learners have launched their
              careers through our platform.
            </li>
            <li>
              Personalized learning with batch sizes of just{" "}
              <strong>5–6 students</strong>.
            </li>
            <li>
              Strong placement network with connections to{" "}
              <strong>2,000+</strong> hiring partners.
            </li>
          </ul>
        </Col>

        {/* Right Side: Student Success Stories */}
        <Col md={4}>
          <h3 className="text-center fw-bold mb-4">Student Success Stories</h3>

          <Card className="mb-3 text-center shadow">
            <Card.Img variant="top" src={student1} alt="Student Akash" />
            <Card.Body>
              <Card.Title>Akash M</Card.Title>
              <Card.Text>Security Analyst at TASPro Technologies</Card.Text>
            </Card.Body>
          </Card>

          <div className="text-center mt-3">
            <Button variant="danger">View All Success Stories →</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCompanySection;
