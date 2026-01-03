import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const IndiCoursePopUPFormComp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === "email" ? "email" : id === "phone" ? "phone" : "query"]: value,
    });
  };

  // Send data to WhatsApp
  const sendToWhatsApp = () => {
    // Format the message for WhatsApp
    const message = `*New Query*\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuery: ${formData.query}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp business phone number - replace with your actual number
    const phoneNumber = "918111000953"; // Format: country code + phone number without +

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Close the modal
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Submit Your Query
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name Here"
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email ID Here"
              value={formData.email}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your Phone number here"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="query">
            <Form.Label>Your Query</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter your query here"
              rows={3}
              value={formData.query}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={sendToWhatsApp}>
          Send to WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default IndiCoursePopUPFormComp;
