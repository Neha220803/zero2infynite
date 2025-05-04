import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";

const IndiCopurseFAQ = () => {
  return (
    <Container className="indi-course-faq-container" id="faq">
      <Row className="mb-4">
        <Col>
          <h2 className="indi-section-title">Frequently Asked Questions</h2>
        </Col>
      </Row>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the course about?</Accordion.Header>
          <Accordion.Body>
            This course covers comprehensive training in programming
            fundamentals and advanced concepts, designed to help you build a
            strong foundation in software development.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How long is the course?</Accordion.Header>
          <Accordion.Body>
            The course duration is 12 weeks, with flexible learning hours to
            accommodate your schedule.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are the prerequisites?</Accordion.Header>
          <Accordion.Body>
            No prior programming experience is required. Basic computer literacy
            and eagerness to learn are all you need.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is there a certificate?</Accordion.Header>
          <Accordion.Body>
            Yes, upon successful completion of the course, you will receive a
            verified certificate of completion.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What support is available during the course?
          </Accordion.Header>
          <Accordion.Body>
            You'll have access to mentor support, live Q&A sessions, and an
            active community forum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Is the course content downloadable?
          </Accordion.Header>
          <Accordion.Body>
            Yes, all course materials including lectures, assignments, and
            resources can be downloaded for offline access.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What is the refund policy?</Accordion.Header>
          <Accordion.Body>
            We offer a 7-day money-back guarantee if you're not satisfied with
            the course.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default IndiCopurseFAQ;
