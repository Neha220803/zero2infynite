import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import student1 from "../../../assets/images/Testimonial/Nithish.png";
import student2 from "../../../assets/images/Testimonial/Nithya.png";
import student3 from "../../../assets/images/Testimonial/Sathya.png";
import "./AboutCompany.css";
// import company from "../../../assets/images/company-eg.png";

const AboutCompanySection = () => {
  const successStories = [
    // First slide - original 3 cards
    [
      {
        id: 1,
        name: "Nithish",
        role: "SOC Analyst",
        company: "EY",
        bgColor: "#FFB6C1", // Light pink
        image: student1,
        offset: "card-offset-1",
      },
      {
        id: 2,
        name: "Nithya",
        role: "SOC Analyst",
        company: "EY",
        bgColor: "#D3D3D3", // Light gray
        image: student2,
        offset: "card-offset-2",
      },
      {
        id: 3,
        name: "Sathya",
        role: "SOC Analyst",
        company: "EY",
        bgColor: "#FFD700", // Gold/Yellow
        image: student3,
        offset: "card-offset-3",
      },
    ],
    // Second slide - 3 new dummy cards
    [
      {
        id: 4,
        name: "Arjun 2",
        role: "Cyber Security Analyst",
        company: "TCS",
        bgColor: "#98FB98", // Light green
        image: student1, // Using dummy image for now
        offset: "card-offset-1",
      },
      {
        id: 5,
        name: "Priya 2",
        role: "Information Security Officer",
        company: "Infosys",
        bgColor: "#FFE4B5", // Light orange
        image: student2, // Using dummy image for now
        offset: "card-offset-2",
      },
      {
        id: 6,
        name: "Vikram 2",
        role: "Penetration Tester",
        company: "Wipro",
        bgColor: "#E6E6FA", // Light lavender
        image: student3, // Using dummy image for now
        offset: "card-offset-3",
      },
    ],
  ];

  return (
    <Container className="my-5">
      <Row>
        {/* Left Side: About Zero2Infynite */}
        <Col sm={12} xs={12} md={8}>
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

        {/* Right Side: Student Success Stories with Carousel */}
        <Col sm={12} xs={12} md={4} className="bg-primar">
          <div className="success-stories-section">
            <h3 className="success-stories-title mb-5">
              Student Success Stories
            </h3>

            {/* Carousel Container */}
            <Carousel
              indicators={false}
              controls={false}
              interval={1500}
              className="success-stories-carousel"
            >
              {successStories.map((slideStories, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  {/* Staggered Cards Container for each slide */}
                  <div className="staggered-cards-container">
                    {slideStories.map((story) => (
                      <div
                        key={story.id}
                        className={`success-card  ${story.offset}`}
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
                </Carousel.Item>
              ))}
            </Carousel>

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
