import React from "react";
import Card from "react-bootstrap/Card";
import "./testimonials.css";
import { Col, Container, Row } from "react-bootstrap";
import { Star } from "lucide-react";

// Combined testimonials array
const allTestimonials = [
  {
    id: 3,
    name: "Abishey Ajith",
    stars: 5,
    reviewCount: 3,
    yearsAgo: "2 years ago",
    review:
      "I had experience in cyber field. Had a nice session and all doubts explained clearly.",
  },
  {
    id: 4,
    name: "sharvil darne",
    stars: 5,
    reviewCount: 3,
    yearsAgo: "2 years ago",
    review:
      "Very informative courses, Trainers are very friendly and teach topics in-depth. Thanks to Zero2Infynite.",
  },
  {
    id: 5,
    name: "Lavanya Kannan",
    stars: 5,
    reviewCount: 3,
    yearsAgo: "2 years ago",
    review:
      "Value for money and professional experience in training.. Helped to get in touch with people from required country for job..",
  },
  {
    id: 6,
    name: "Sneha Sai",
    stars: 5,
    reviewCount: 3,
    yearsAgo: "2 years ago",
    review:
      "Way of teaching is good.. Study materials are very good, we can easily understand.. Good place to learn..",
  },
];

// Function to generate a random color
const getRandomColor = (name) => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E9",
    "#F8C471",
    "#82E0AA",
    "#F1948A",
    "#85C1E9",
    "#D7BDE2",
  ];

  // Use the name to consistently generate the same color for the same person
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

// Function to get the first letter of the name
const getInitials = (name) => {
  return name.charAt(0).toUpperCase();
};

export default function TestimonialSection() {
  return (
    <section className="testi-bg">
      <Container className="pt-5 mt-5">
        <Row className="text-center">
          <h2 className="text-white mb-2">What Our Students Say</h2>
          <p className="text-white testimonial-subheader">
            Hear from our students about their experiences and success stories.
          </p>
        </Row>
        <Row>
          {allTestimonials.map((testimonial) => (
            <Col
              key={testimonial.id}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="mb-4"
            >
              <div className="testimonial-stack-viewport h-100">
                <div className="testimonial-frame-holder h-100">
                  <Card className="testimonial-slide-panel border-0 h-100">
                    <Card.Body className="testimonial-card-body">
                      <div className="testimonial-header">
                        <div
                          className="avatar"
                          style={{
                            backgroundColor: getRandomColor(testimonial.name),
                          }}
                        >
                          <span className="avatar-initial">
                            {getInitials(testimonial.name)}
                          </span>
                        </div>
                        <div>
                          <h5 className="testimonial-name">
                            {testimonial.name}
                          </h5>
                          <p className="testimonial-subtext">
                            {testimonial.reviewCount} reviews
                          </p>
                        </div>
                      </div>

                      <div className="testimonial-rating-time">
                        <div className="stars">
                          {Array.from(
                            { length: testimonial.stars },
                            (_, index) => (
                              <Star
                                key={index}
                                size={16}
                                fill="#FFD700"
                                color="#FFD700"
                              />
                            )
                          )}
                        </div>
                        <div className="testimonial-time">
                          {testimonial.yearsAgo}
                        </div>
                      </div>
                      <Card.Text className="testimonial-message">
                        {testimonial.review}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
