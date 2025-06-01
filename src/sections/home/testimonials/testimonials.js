import React, { useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./testimonials.css"; // Import the external CSS file

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Exceptional Service",
      content:
        "Experience the ultimate in luxury living with our premium services.",
    },
    {
      id: 2,
      title: "Modern Design",
      content: "Modern design meets timeless elegance in every detail.",
    },
    {
      id: 3,
      title: "Luxury Redefined",
      content: "Indulge in a home that redefines luxury and comfort.",
    },
    {
      id: 4,
      title: "Premium Quality",
      content:
        "Experience the ultimate in luxury living with unmatched quality.",
    },
    {
      id: 5,
      title: "Timeless Elegance",
      content:
        "Modern design meets timeless elegance in our exclusive collection.",
    },
    {
      id: 6,
      title: "Ultimate Comfort",
      content: "Indulge in a home that redefines luxury and ultimate comfort.",
    },
    {
      id: 7,
      title: "Refined Living",
      content:
        "Experience the ultimate in luxury living with refined sophistication.",
    },
    {
      id: 8,
      title: "Sophisticated Design",
      content:
        "Modern design meets timeless elegance with sophisticated touches.",
    },
    {
      id: 9,
      title: "Luxury Experience",
      content: "Indulge in a home that redefines luxury living experience.",
    },
    {
      id: 10,
      title: "Perfect Harmony",
      content: "Experience the ultimate in luxury living with perfect harmony.",
    },
  ];

  const slideRefs = useRef([]);

  // Custom hook to handle scroll-based animations
  const useScrollAnimation = () => {
    React.useEffect(() => {
      const handleScroll = () => {
        slideRefs.current.forEach((slide, index) => {
          if (!slide) return;

          const rect = slide.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate progress based on scroll position
          const progress = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / windowHeight)
          );

          // Don't animate the last slide
          if (index === testimonials.length - 1) {
            slide.style.opacity = "1";
            slide.style.transform = "scale(1)";
            return;
          }

          // Apply fade and scale based on scroll progress
          if (rect.top <= 0 && rect.bottom > 0) {
            // Slide is sticky at top
            const fadeProgress = Math.max(
              0,
              Math.min(1, Math.abs(rect.top) / windowHeight)
            );
            const opacity = 1 - fadeProgress;
            const scale = 1 - fadeProgress * 0.4; // Scale from 1 to 0.6

            slide.style.opacity = opacity;
            slide.style.transform = `scale(${scale})`;
          } else if (rect.top > 0) {
            // Slide is coming into view
            slide.style.opacity = "1";
            slide.style.transform = "scale(1)";
          }
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  };

  useScrollAnimation();

  React.useEffect(() => {
    // Component initialization if needed
  }, []);

  return (
    <Container className="mt-5">
      <Row className="text-center">
        <h2>Hear it from our clients</h2>
      </Row>
      <Row>
        <Col className="bg-primary">
          <div className="testimonial-stack-viewport">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-frame-holder">
                <Card
                  className="testimonial-slide-panel border-0"
                  ref={(el) => (slideRefs.current[index] = el)}
                >
                  <Card.Body className="d-flex flex-column justify-content-end h-100 p-0">
                    <Card.Title
                      as="h2"
                      className="display-5 fw-bold mb-3 text-dark"
                    >
                      {testimonial.title}
                    </Card.Title>
                    <Card.Text className="fs-5 text-muted lh-base">
                      {testimonial.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
        <Col>Hi</Col>
      </Row>
    </Container>
  );
};

export default TestimonialSection;
