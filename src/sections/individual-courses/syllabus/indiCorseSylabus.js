import React from "react";
import { Card, Container, ListGroup, Row, Col } from "react-bootstrap";
import "./indiCourseSyllabus.css";

const IndiCorseSylabusComp = () => {
  const syllabusModules = [
    {
      title: "Module 1: Introduction to Ethical Hacking",
      topics: [
        "Information Security Overview",
        "Hacking Concepts and Methodology",
        "Ethical Hacking Scope and Limitations",
      ],
    },
    {
      title: "Module 2: Footprinting and Reconnaissance",
      topics: [
        "Network Scanning Techniques",
        "Information Gathering Methods",
        "Social Engineering Tactics",
      ],
    },
    {
      title: "Module 3: System Hacking",
      topics: [
        "Password Cracking Techniques",
        "Privilege Escalation",
        "Maintaining Access",
      ],
    },
    {
      title: "Module 4: Network Security",
      topics: [
        "Wireless Network Vulnerabilities",
        "Web Application Security",
        "Network Defense Mechanisms",
      ],
    },
    {
      title: "Module 5: Tools and Practical Applications",
      topics: [
        "Security Tools and Software",
        "Penetration Testing",
        "Real-world Attack Scenarios",
      ],
    },
  ];

  return (
    <Container className="syllabus-container" id="syllabus">
      <h2 className="indi-section-title mb-4">Course Syllabus</h2>
      <div className="syllabus-content">
        <Row className="d-flex justify-content-center">
          {syllabusModules.map((module, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="h-100">
                <Card.Header as="h5">{module.title}</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    {module.topics.map((topic, topicIndex) => (
                      <ListGroup.Item key={topicIndex}>{topic}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default IndiCorseSylabusComp;
