import React, { useRef } from "react";
import "./testimonials.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import profileImg from "../../../assets/images/avathar3.png";

const testimonials = [
  {
    id: 1,
    text: "The cybersecurity program exceeded my expectations. The hands-on labs and real-world scenarios helped me develop practical skills that I use daily in my role as a Security Analyst.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 2,
    text: "The instructors were incredibly knowledgeable and supportive. The course material was comprehensive and up-to-date with current industry trends. I landed my dream job right after completion.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 3,
    text: "Zero2Infynite's training program gave me a solid foundation in cybersecurity fundamentals. The mock CTF challenges were particularly helpful in developing my problem-solving skills.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 4,
    text: "As someone transitioning into cybersecurity, this program provided the perfect balance of theory and practical experience. The mentorship support was invaluable.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 5,
    text: "The certification preparation modules were excellent. I passed my Security+ exam on the first attempt thanks to the targeted study materials and practice tests.",
    name: "Jocelyn Lubin",
    role: "Security Analyst",
  },
  {
    id: 6,
    text: "What sets this program apart is the focus on real-world scenarios and incident response. I now feel confident handling security incidents in my SOC role.",
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
