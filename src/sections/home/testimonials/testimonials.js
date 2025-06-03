import React from "react";
import Card from "react-bootstrap/Card";
import "./testimonials.css";
import { Col, Container, Row } from "react-bootstrap";

const testimonials = [
  {
    id: 1,
    name: "Abishek Ajith",
    reviewCount: 3,
    stars: 5,
    yearsAgo: "4 years ago",
    message:
      "I had Experience in cyber field. Had a nice session and all doubts explained clearly",
  },
  {
    id: 2,
    name: "Ajith Abishek",
    reviewCount: 3,
    stars: 4,
    yearsAgo: "2 years ago",
    message:
      "I had Experience in cyber field. Had a nice session and all doubts explained clearly",
  },
  // Add more testimonials here as needed
];

export default function TestimonialSection() {
  return (
    <section className="">
      <Container className="pt-5 mt-5">
        <Row className="text-center  ">
          <h2 className="testimonial-header mb-4">What Our Students Say</h2>
          <p className="testimonial-subheader">
            Hear from our students about their experiences and success stories.
          </p>
        </Row>
        <Row>
          <Col>
            <div className="testimonial-stack-viewport">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-frame-holder">
                  <Card className="testimonial-slide-panel border-0">
                    <Card.Body className="testimonial-card-body">
                      <div className="testimonial-header">
                        <div className="avatar"></div>
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
                          {"★".repeat(testimonial.stars)}
                        </div>
                        <div className="testimonial-time">
                          {testimonial.yearsAgo}
                        </div>
                      </div>

                      <Card.Text className="testimonial-message">
                        {testimonial.message}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <iframe
              width="560"
              height="100%"
              src="https://www.youtube.com/embed/zYLkdT731x8?si=4_XxmJ6W1-TgTs7S"
              title="YouTube video player"
              frameOrder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: "34px" }}
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
