import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import stuCerti from "../../../assets/images/indi_course/stu_certi.png";
import "./Certifications.css";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses";
import { compTIACourses } from "../../../data/compTIACourses";
import { isacaCourses } from "../../../data/isacaCourses";

const CertificationsComp = ({ courseType = "CEH" }) => {
  // Get course data based on courseType prop
  const courseData =
    ecCouncilCourses[courseType] ||
    compTIACourses[courseType] ||
    isacaCourses[courseType];
  const certificationsData = courseData.certifications;

  // Image mapping for dynamic imports
  const imageMap = {
    stuCerti: stuCerti,
    // Add more images here as needed
  };

  return (
    <div id="certifications">
      <Container>
        {certificationsData.sections.map((section, sectionIndex) => (
          <Row key={sectionIndex} className="mb-4">
            <Col xs={12} md={6}>
              <h2 className="indi-section-title mb-4">
                {certificationsData.title}
              </h2>
              <h3>{section.title}</h3>
              {section.content.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="certification-paragraph">
                  {paragraph}
                </p>
              ))}
            </Col>
            {section.image && (
              <Col xs={12} md={6} className="certification-image-container">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  className={section.image.className}
                />
              </Col>
            )}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default CertificationsComp;
