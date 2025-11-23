import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo/cropped-logo.png";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const AboutUsFooterComp = () => {
  return (
    <div className="p-5">
      <Container className="d-flex h-100">
        <Row>
          <Col md={4} xs={12} sm={12}>
            <Image src={logo} alt="" className="w-75 mb-3" />
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className=" text-decoration-none hover-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/all-courses"
                  className=" text-decoration-none hover-link"
                >
                  All Courses
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/internship"
                  className=" text-decoration-none hover-link"
                >
                  Internship
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/testimonial"
                  className=" text-decoration-none hover-link"
                >
                  Testimonial
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none hover-link">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/blogs" className=" text-decoration-none hover-link">
                  Blogs
                </a>
              </li>
            </ul>
            <div className="social-icons d-flex">
              <a
                href="https://www.instagram.com/zero2infynite/"
                className="me-3 "
              >
                <FaInstagram id="insta-icon" size={24} />
              </a>
              <a
                href="https://www.facebook.com/Zero2Infynite/"
                className="me-3 "
              >
                <FaFacebook id="fb-icon" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/zero2infynite"
                className="me-3 "
              >
                <FaLinkedinIn id="linkedin-icon" size={24} />
              </a>
            </div>
          </Col>
          <Col
            md={8}
            xs={12}
            sm={12}
            className=" h-100 d-flex justify-content-between flex-column"
          >
            <div>
              <h1>
                Zero trust is a security principle — Zero2Infynite is your
                transformation principle.
              </h1>
              {/* <h3 className="mt-4 text-secondary">- Kevin Mitnick</h3> */}
            </div>
            <div className="d-flex justify-content-start gap-5">
              <a
                className="text-primary text-decoration-none cursor-pointer"
                href="/terms"
              >
                Terms of Service
              </a>
              <a
                className="text-primary text-decoration-none cursor-pointer"
                href="/terms"
              >
                Privacy Policy
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsFooterComp;
