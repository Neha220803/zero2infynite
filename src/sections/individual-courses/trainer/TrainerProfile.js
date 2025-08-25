import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check2Circle } from "react-bootstrap-icons";
import "./TrainerProfile.css";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses";
import { compTIACourses } from "../../../data/compTIACourses";
import { isacaCourses } from "../../../data/isacaCourses";

const TrainerProfileComp = ({ courseType = "CEH" }) => {
  // Get course data based on courseType prop
  const courseData =
    ecCouncilCourses[courseType] ||
    compTIACourses[courseType] ||
    isacaCourses[courseType];
  const trainerData = courseData.trainerProfile;

  return (
    <div id="trainer" className="py-5">
      <Container>
        <Row className="justify-content-start mb-4">
          <h2 className="indi-section-title mb-4">{trainerData.title}</h2>
        </Row>

        <Row className="justify-content-start">
          {trainerData.qualities.map((quality, index) => (
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
    </div>
  );
};

export default TrainerProfileComp;
