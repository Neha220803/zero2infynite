import React, { useRef } from "react";
import "./testimonials.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import profileImg from "../../../assets/images/avathar3.png";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Auctor ac amet diam nunc phasellus sed.",
    name: "Jocelyn Lubin",
    role: "SOC Analyst",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="testimonials-section">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col>
            <h2>Testimonials</h2>
          </Col>
          <Col className="d-flex justify-content-end">
            <button
              className="scroll-btn left me-2"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft />
            </button>
            <button
              className="scroll-btn right"
              onClick={() => scroll("right")}
            >
              <FaChevronRight />
            </button>
          </Col>
        </Row>

        <div className="scroll-container">
          <div className="cards-container" ref={scrollRef}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <Card.Body>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="star-icon" />
                    ))}
                  </div>
                  <Card.Text>{testimonial.text}</Card.Text>
                  <div className="testimonial-author">
                    <img
                      src={profileImg}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div>
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
