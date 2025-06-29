import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./footer.css";
import logo from ".././../assets/images/logo/cropped-logo.png";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { Envelope, Whatsapp } from "react-bootstrap-icons";

const ContentFooterComp = () => {
  return (
    <footer>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={7}>
              <h2 className="fw-bold mb-3">
                Empowering Ethical Hackers to
                <br />
                Protect Our Digital World
              </h2>
            </Col>
            <Col lg={4} md={5} className="text-md-end">
              <Button
                variant="outline-light"
                size="lg"
                className="px-4 py-2 fw-semibold"
                style={{ borderWidth: "2px" }}
              >
                Join Us Today
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="bg-dark text-white py-5">
        <Container>
          <Row>
            {/* Company Description */}
            <Col lg={5} md={12} className="mb-4">
              <div className="pe-lg-4">
                <Image src={logo} alt="" className="w-75 mb-3" />
                <p className=" lh-base">
                  Zero2Infynite's career-focused, implementation-based learning
                  programs pave the road to a success-assured career in Ethical
                  Hacking & Cybersecurity. Our expert instructors provide
                  hands-on training in real-world scenarios, ensuring students
                  are well-prepared to tackle cyber threats.
                </p>
                <p className=" mt-3">
                  Join us to become a part of a growing community dedicated to
                  securing the digital future. Begin your journey with
                  Zero2Infynite and secure your future in cybersecurity.
                </p>
              </div>
            </Col>

            {/* Our Links */}
            <Col lg={3} md={4} sm={6} className="mb-4">
              <h5 className="text-primary fw-bold mb-3">Our Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Courses
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Corporate Training
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Events
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    News
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Internship
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className=" text-decoration-none hover-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={4} className="mb-4">
              <h5 className="text-primary fw-bold mb-3">Contact Info</h5>
              <div className="contact-item mb-3 d-flex align-items-center">
                <BsFillTelephoneFill className="text-secondary me-3 fs-5" />
                <span className="">+91 7907715669</span>
              </div>
              <div className="contact-item mb-3 d-flex align-items-center">
                <Envelope className="text-secondary me-3 fs-5" />
                <span className="">support@zero2infynite.com</span>
              </div>
              <div className="contact-item mb-3 d-flex align-items-center">
                <BsWhatsapp className="text-secondary me-3 fs-5" />
                <span className="">+91 7007715669</span>
              </div>
              <h5 className="text-primary fw-bold mb-3">Locations</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="">Chennai</span>
                </li>
                <li className="mb-2">
                  <span className="">Kottakkal</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-center py-2">
        <Container>
          <Row>
            <Col>
              <p className=" mb-0">
                © 2024 Zero2Infynite. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default ContentFooterComp;
