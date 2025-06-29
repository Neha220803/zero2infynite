import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InternTestimonial.css";
import internSampleImg from "../../../assets/images/internship/placeholder.png";

const InternTestimonialComp = () => {
  return (
    <section>
      <Container>
        <Row>
          <h1 className="text-center mb-5">
            <span className="text-primary">Testimonial </span>
            about Internship
          </h1>
        </Row>
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center mx-auto align-items-center"
          >
            <div className="intern-testimonial-text">
              <h2 className="mb-5 ">
                My{" "}
                <span className="text-secondary">Internship Experience </span>
              </h2>
              <p>
                Joining this internship was one of the best decisions I've made
                for my career. I had the opportunity to work on real-world
                projects, collaborate with industry professionals, and gain
                hands-on experience in a fast-paced environment.
              </p>
              <p>
                The mentorship and guidance provided throughout the journey
                helped me improve my technical and soft skills significantly. I
                now feel more confident stepping into the professional world.
              </p>
              <p className="mt-5 fw-bold text-secondary">
                - Akilesh Sunder, Cyber Security Intern
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="blue-bg">
              <img
                src={internSampleImg}
                alt=""
                className="intern-bg-testi-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InternTestimonialComp;
