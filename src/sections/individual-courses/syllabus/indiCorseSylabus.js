import React from "react";
import { Container, Accordion, ListGroup } from "react-bootstrap";
import "./indiCourseSyllabus.css";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses"; // Import the data

const IndiCorseSylabusComp = ({ courseType }) => {
  // Get course data based on courseType prop
  const courseData = ecCouncilCourses[courseType];
  const syllabusModules = courseData?.syllabusModules;

  // If no syllabusModules exist, don't render anything
  if (!syllabusModules || syllabusModules.length === 0) {
    return null;
  }

  return (
    <Container className="syllabus-container" id="syllabus">
      <h2 className="indi-section-title mb-4">Course Syllabus</h2>
      <div className="syllabus-content">
        <Accordion defaultActiveKey="0">
          {syllabusModules.map((module, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{module.title}</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                  {module.topics.map((topic, topicIndex) => (
                    <ListGroup.Item key={topicIndex}>{topic}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default IndiCorseSylabusComp;
