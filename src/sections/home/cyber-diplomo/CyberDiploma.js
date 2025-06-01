import React, { useRef } from "react";
import "./CyberDiplomo.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "CEH Masters Program",
    subtitle: "Certified Ethical Hacker",
    rating: 4.9,
    reviews: 2847,
    description:
      "Master the art of ethical hacking with comprehensive penetration testing techniques and vulnerability assessment methodologies...",
    color: "from-pink-500 to-rose-600",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Penetration Testing Program",
    subtitle: "Advanced PT Certification",
    rating: 4.8,
    reviews: 1923,
    description:
      "Advanced penetration testing program focusing on real-world scenarios and cutting-edge security testing frameworks...",
    color: "from-yellow-500 to-orange-500",
    icon: "🔍",
  },
  {
    id: 3,
    title: "SIEM Masters Program",
    subtitle: "Security Information & Event Management",
    rating: 4.9,
    reviews: 1654,
    description:
      "Master SIEM technologies with hands-on experience in security monitoring, incident response, and threat detection...",
    color: "from-purple-500 to-purple-700",
    icon: "📊",
  },
  {
    id: 4,
    title: "CHFI Masters Program",
    subtitle: "Computer Hacking Forensic Investigator",
    rating: 4.7,
    reviews: 1432,
    description:
      "Comprehensive digital forensics program covering incident response, evidence collection, and cybercrime investigation...",
    color: "from-emerald-500 to-teal-600",
    icon: "🔬",
  },
  {
    id: 5,
    title: "Security Auditing Program",
    subtitle: "Advanced Security Assessment",
    rating: 4.8,
    reviews: 1789,
    description:
      "Master security auditing techniques with comprehensive risk assessment and compliance frameworks...",
    color: "from-pink-500 to-purple-600",
    icon: "📋",
  },
];

const DiplomaSection = () => {
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
    <div className="diplomos-section">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col>
            <h2>Cyber Security Diploma</h2>
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
            {courses.map((course) => (
              <Card key={course.id} className="diplomo-card">
                <Card.Body>
                  <div className="course-icon">{course.icon}</div>
                  <div className="course-header">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-subtitle">{course.subtitle}</p>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < Math.floor(course.rating)
                            ? "star-icon filled"
                            : "star-icon"
                        }
                      />
                    ))}
                    <span className="rating-text">{course.rating}</span>
                    <span className="reviews-count">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                  <Card.Text className="course-description">
                    {course.description}
                  </Card.Text>
                  <button className="enroll-btn">Enroll Now</button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiplomaSection;
