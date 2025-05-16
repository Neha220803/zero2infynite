import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check2Circle } from "react-bootstrap-icons";
import "./TrainerProfile.css";

const TrainerProfileComp = () => {
  const trainerQualities = [
    "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
    "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
    "Expert mentors deliver individualized coaching and career advice.",
    "Patiently address and clarify students' critical doubts.",
    "Provide individual attention to help each student work with cybersecurity tools and troubleshoots issues.",
    "Trainers offer flexible scheduling to match students' availability.",
  ];

  return (
    <section id="trainer" className="py-5">
      <Container>
        <Row className="justify-content-start mb-4">
          <h2 className="indi-section-title mb-4">Trainer Profile</h2>
        </Row>

        <Row className="justify-content-start">
          {trainerQualities.map((quality, index) => (
            <Row key={index} className="mb-3 text-start align-items-center">
              <Col xs="auto" className="pe-0">
                <Check2Circle className="text-primary" size={20} />
              </Col>
              <Col>
                <p className="mb-0 ms-2 trainere-profile-para">{quality}</p>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrainerProfileComp;
