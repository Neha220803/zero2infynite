import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "./testimonials.css";

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
    name: "Sarah Johnson",
    role: "Cybersecurity Engineer",
  },
  {
    id: 3,
    text: "Zero2Infynite's training program gave me a solid foundation in cybersecurity fundamentals. The mock CTF challenges were particularly helpful in developing my problem-solving skills.",
    name: "Michael Chen",
    role: "Penetration Tester",
  },
  {
    id: 4,
    text: "As someone transitioning into cybersecurity, this program provided the perfect balance of theory and practical experience. The mentorship support was invaluable.",
    name: "Emily Rodriguez",
    role: "Security Consultant",
  },
  {
    id: 5,
    text: "The certification preparation modules were excellent. I passed my Security+ exam on the first attempt thanks to the targeted study materials and practice tests.",
    name: "David Thompson",
    role: "IT Security Specialist",
  },
  {
    id: 6,
    text: "What sets this program apart is the focus on real-world scenarios and incident response. I now feel confident handling security incidents in my SOC role.",
    name: "Jessica Williams",
    role: "SOC Analyst",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Hear from cybersecurity professionals who transformed their
              careers through our comprehensive training programs
            </p>
          </Col>
        </Row>

        {/* Main Content: Testimonials + Video */}
        <Row className="main-content mb-5">
          {/* Testimonials Column */}
          <Col lg={7} md={6}>
            <div className="testimonials-container">
              <Row className="g-3">
                {testimonials.map((testimonial) => (
                  <Col md={6} key={testimonial.id}>
                    <Card className="testimonial-card">
                      <Card.Body className="testimonial-body">
                        {/* Star Rating */}
                        <div className="star-rating">
                          {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="star-icon" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <Card.Text className="testimonial-text">
                          "{testimonial.text}"
                        </Card.Text>

                        {/* Author Info */}
                        <div className="author-info">
                          <div className="author-avatar">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="author-details">
                            <h6 className="author-name">{testimonial.name}</h6>
                            <small className="author-role">
                              {testimonial.role}
                            </small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Video Column */}
          <Col lg={5} md={6}>
            <div className="video-section">
              <h3 className="video-title py-2 ">See Our Success Stories</h3>
              <p className="video-subtitle">
                Watch how our students transformed their careers in
                cybersecurity
              </p>
              <div className="video-container">
                <iframe
                  className="youtube-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Zero2Infynite Success Stories"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mt-5">
          <Col>
            <Card className="cta-card">
              <Card.Body className="cta-body">
                <h3 className="cta-title">Ready to Transform Your Career?</h3>
                <p className="cta-subtitle">
                  Join thousands of professionals who have successfully launched
                  their cybersecurity careers with Zero2Infynite
                </p>
                <div className="cta-buttons">
                  <Button className="cta-primary">
                    Start Your Journey Today <FaArrowRight className="ms-2" />
                  </Button>
                  <Button variant="outline-light" className="cta-secondary">
                    View Course Catalog
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section">
          <Col md={4}>
            <div className="stat-item">
              <h2 className="stat-number">95%</h2>
              <p className="stat-label">Job Placement Rate</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-item">
              <h2 className="stat-number">500+</h2>
              <p className="stat-label">Graduates Placed</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-item">
              <h2 className="stat-number">4.9/5</h2>
              <p className="stat-label">Average Rating</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialsSection;
