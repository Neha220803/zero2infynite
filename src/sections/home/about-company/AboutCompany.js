import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import student1 from "../../../assets/images/Testimonial/Nithish.png";
import student2 from "../../../assets/images/Testimonial/Nithya.png";
import student3 from "../../../assets/images/Testimonial/Sathya.png";
import "./AboutCompany.css";
import company from "../../../assets/images/company-eg.png";

const AboutCompanySection = () => {
  const successStories = [
    {
      id: 1,
      name: "Nithish",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#FFB6C1", // Light pink
      image: student1,
      offset: "card-offset-1", // First card - highest position
    },
    {
      id: 2,
      name: "Nithya",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#D3D3D3", // Light gray
      image: student2,
      offset: "card-offset-2", // Second card - middle position
    },
    {
      id: 3,
      name: "Sathya",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#FFD700", // Gold/Yellow
      image: student3,
      offset: "card-offset-3", // Third card - lowest position
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        {/* Left Side: About Zero2Infynite */}
        <Col md={8}>
          <h2 className="text-primary fw-bold">
            Welcome to Zero2Infynite - Empowering the Future of Cybersecurity
          </h2>
          <p className="mt-3">
            At <strong>Zero2Infynite</strong>, we are more than just a
            cybersecurity training company — we are your gateway to a secure
            digital future. Our mission is to transform passionate learners into
            skilled professionals, guiding them from zero knowledge to infinite
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
              <strong>5-6 students</strong>.
            </li>
            <li>
              Strong placement network with connections to{" "}
              <strong>2,000+</strong> hiring partners.
            </li>
          </ul>
        </Col>

        {/* Right Side: Student Success Stories */}
        <Col md={4} className="bg-primar">
          <div className="success-stories-section">
            <h3 className="success-stories-title">Student Success Stories</h3>
            {/* Staggered Cards Container */}
            <div className="staggered-cards-container">
              {successStories.map((story) => (
                <div
                  key={story.id}
                  className={`success-card ps-4 ${story.offset}`}
                  style={{ backgroundColor: `${story.bgColor}` }}
                >
                  <div className="student-info">
                    <h6 className="student-name">{story.name}</h6>
                    <small className="student-role">{story.role}</small>
                  </div>

                  <div className="student-image-container">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="avatar-image"
                    />
                  </div>

                  {/* <div className="company-logo-container">
                    <img
                      src={company}
                      alt={story.company}
                      className="company-logo"
                    />
                  </div> */}
                </div>
              ))}
            </div>
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
