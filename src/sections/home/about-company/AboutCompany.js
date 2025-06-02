import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import student1 from "../../../assets/images/avathar2.png";
import "./AboutCompany.css";

const AboutCompanySection = () => {
  const successStories = [
    {
      id: 1,
      name: "Akash M",
      role: "Security Analyst",
      company: "TASPro Technologies",
      bgColor: "#FFB6C1", // Light pink
      image: student1,
    },
    {
      id: 2,
      name: "Akash M",
      role: "Security Analyst",
      company: "TASPro Technologies",
      bgColor: "#D3D3D3", // Light gray
      image: student1,
    },
    {
      id: 3,
      name: "Akash M",
      role: "Security Analyst",
      company: "TASPro Technologies",
      bgColor: "#FFD700", // Gold/Yellow
      image: student1,
    },
  ];

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
            practical skills needed to thrive in today's threat landscape.
          </p>
          <p>
            But we don't stop at training. Our robust placement assistance
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
        <Col md={4} className="bg-primar">
          <div className="success-stories-section ">
            <h3 className="success-stories-title">Student Success Stories</h3>
            {/* Top Row - 3 circular avatars */}
            <Row className="bg-dar h-100">
              {successStories.map((story) => (
                <Col xs={4} key={story.id} className="p-1">
                  <div
                    style={{ backgroundColor: `${story.bgColor}` }}
                    className="h-100 w-100 bg-dar indi-succ-col d-flex flex-column justify-content-around align-items-center"
                  >
                    <div className="">
                      <h6 className="student-name">{story.name}</h6>
                      <small className="student-role">{story.role}</small>
                    </div>

                    <div className="bg-primar p-0">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="avatar-image w-100"
                      />
                    </div>

                    <div>Hii</div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="button-container">
              <Button className="view-stories-button">
                View all success stories →
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutCompanySection;
