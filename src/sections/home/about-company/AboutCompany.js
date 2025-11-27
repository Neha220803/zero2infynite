import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import student1 from "../../../assets/images/Testimonial/Nithish.png";
import student2 from "../../../assets/images/Testimonial/Nithya.png";
import student3 from "../../../assets/images/Testimonial/Sathya.png";
import "./AboutCompany.css";
import { useNavigate } from "react-router-dom";
import successStud1 from "../../../assets/images/Testimonial/Nayeem.png";
import successStud2 from "../../../assets/images/Testimonial/testo-carousel.png";
import successStud3 from "../../../assets/images/Testimonial/testi-carousel-3.jpeg";
import company from "../../../assets/images/logo/EC-Council-ACC-Badge.png";

const AboutCompanySection = () => {
  const navigate = useNavigate();

  const successStories = [
    {
      id: 1,
      name: "Nithish",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#FFB6C1", // Light pink
      image: successStud1,
      offset: "card-offset-1",
    },
    {
      id: 2,
      name: "Nithya",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#D3D3D3", // Light gray
      image: successStud2,
      offset: "card-offset-2",
    },
    {
      id: 3,
      name: "Sathya",
      role: "SOC Analyst",
      company: "EY",
      bgColor: "#FFD700", // Gold/Yellow
      image: successStud3,
      offset: "card-offset-3",
    },
  ];
  const handleViewStoriesClick = () => {
    navigate("/testimonial");
  };
  return (
    <Container className="my-5 bg-succes">
      <Row>
        {/* Left Side: About Zero2Infynite */}
        <Col sm={12} xs={12} md={8}>
          <div className="d-flex flex-md-row flex-column align-items-center gap-3 bg-prim">
            <img src={company} alt="company building" className="acc-badge" />
            <div>
              <h2 className="text-primary fw-bold text-md-">
                Welcome to Zero2Infynite
              </h2>
              <h5 className="text-secondary mt-1  text-md- ">
                Empowering the Future of Cybersecurity
              </h5>
            </div>
          </div>

          <div className="mt-4 about-company-para-font">
            <p className="mt-3 about-company-para-font ">
              At <strong>Zero2Infynite</strong>, we are more than just a
              cybersecurity training company - we are your gateway to a secure
              digital future. Our mission is to transform passionate learners
              into skilled professionals, guiding them from{" "}
              <strong>zero knowledge to infinite potential</strong> in the
              ever-evolving world of cybersecurity
            </p>
            <p>
              We offer{" "}
              <strong>comprehensive, hands-on training programs</strong>{" "}
              designed by industry experts, tailored to meet real-world demands.
              Whether you're a beginner or an experienced professional, our
              curriculum ensures you gain the technical expertise, critical
              thinking, and practical skills needed to thrive in today's threat
              landscape.
            </p>
            <p>
              But we don't stop at training. Our robust{" "}
              <strong>placement assistance</strong> connects you with top
              employers, helping you land roles in penetration testing, security
              operations, compliance, cloud security, and more. Additionally, we
              offer <strong>professional cybersecurity services</strong> to
              businesses, securing digital infrastructures with advanced threat
              detection, incident response, and risk management solutions.
            </p>
            <p>
              Join <strong>Zero2Infynite</strong> - where your journey from
              learning to leading in cybersecurity begins.
            </p>
          </div>

          {/* <h4 className="mt-4 text-primary fw-bold">
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
          </ul> */}
        </Col>

        {/* Right Side: Student Success Stories with Carousel */}
        <Col sm={12} xs={12} md={4} className="bg-primar ">
          <div className="success-stories-section justify-content-between d-flex flex-column h-100">
            <div>
              <h3 className="success-stories-title ">
                Student Success Stories
              </h3>

              {/* Carousel Container */}
              <Carousel
                indicators={false}
                controls={false}
                interval={1800}
                className="success-stories-carousel"
              >
                {successStories.map((slideStories, slideIndex) => (
                  <Carousel.Item key={slideIndex}>
                    {/* Staggered Cards Container for each slide */}
                    <div className="success-students-carousel-container">
                      <img
                        src={slideStories.image}
                        alt="success students"
                        className="w-100"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className="button-container">
              <Button
                className="view-stories-button"
                onClick={handleViewStoriesClick}
              >
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
