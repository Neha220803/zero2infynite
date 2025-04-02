// HomeHeader.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../home/header.css"; // Ensure you have the correct path to your CSS file
import headerBg from "../../assets/videos/headerbg1.mp4"; // Update with your actual file path and name

const HomeHeader = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="header-container position-relative d-flex align-items-center">
      {/* Video Background using imported video */}
      <video className="video-background" autoPlay loop muted>
        <source src={headerBg} type="video/mp4" />
        Your browser does not support the video.
      </video>

      {/* Overlay for better text visibility */}
      <div className="overlay"></div>
      <Container className="position-relative z-index-1">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg={7}>
            <div className="header-content text-white">
              <Button variant="primary" className="px-4 py-2 mb-4">
                Learn the best tactics to ensure Cybersecurity
              </Button>
              <h1 className="mb-4 w-75">
                Become a Certified Cyber Security Expert
              </h1>
            </div>
          </Col>
          <Col lg={5}>
            <div className="form-container bg-dark p-4 rounded">
              <h2 className="text-white mb-4">Connect With us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="text-white">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className="text-white">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="qualification">
                  <Form.Label className="text-white">Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    placeholder="Enter your qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 py-2">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeHeader;
