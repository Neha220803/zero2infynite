import React from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses";

const IndiCourseFAQ = ({ courseType = "CEH" }) => {
  // Get course data based on courseType prop
  const courseData = ecCouncilCourses[courseType];
  const faqData = courseData.faq;

  return (
    <Container className="indi-course-faq-container" id="faq">
      <Row className="mb-4">
        <Col>
          <h2 className="indi-section-title">{faqData.title}</h2>
        </Col>
      </Row>

      <Accordion defaultActiveKey={faqData.defaultActiveKey}>
        {faqData.questions.map((faqItem) => (
          <Accordion.Item key={faqItem.eventKey} eventKey={faqItem.eventKey}>
            <Accordion.Header>{faqItem.question}</Accordion.Header>
            <Accordion.Body>{faqItem.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default IndiCourseFAQ;
