import React from "react";
import "./TestimonialHeader.css";
import { Button } from "react-bootstrap";

const TestimonialHeaderComp = () => {
  return (
    <header className="testimonial-header-bg-img  d-flex flex-column align-items-center justify-content-center text-center">
      <h1>Most trusted promising training platform</h1>
      <p>
        Besant Technologies is rated as the No.1 Online Training Instuitite with
        100% placement support.
      </p>
      <Button
        variant="primary"
        className="rounded-4"
        href="https://share.google/mQlmA46asO2QR487M"
      >
        Create Your Own Review
      </Button>
    </header>
  );
};

export default TestimonialHeaderComp;
