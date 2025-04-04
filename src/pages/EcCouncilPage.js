import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueBorderTransCards from "../components/cards/blueBorderTransCard";

// Import your images - update these paths to match your project structure
import cehImage from "../assets/images/ceh.png";
import cpentImage from "../assets/images/ceh.png";
import chfiImage from "../assets/images/ceh.png";
import cndImage from "../assets/images/ceh.png";
import caseImage from "../assets/images/ceh.png";
import ecihImage from "../assets/images/ceh.png";

const EcCouncilPages = () => {
  // Data for courses
  const ecCouncilCourses = [
    {
      id: 1,
      img: cehImage,
      path: "/ec-council/ceh",
    },
    {
      id: 2,
      img: cpentImage,
      path: "/ec-council/cpent",
    },
    {
      id: 3,
      img: chfiImage,
      path: "/ec-council/chfi",
    },
    {
      id: 4,
      img: cndImage,
      path: "/ec-council/cnd",
    },
    {
      id: 5,
      img: caseImage,
      path: "/ec-council/case",
    },
    {
      id: 6,
      img: ecihImage,
      path: "/ec-council/ecih",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-5">EC-Council Certifications</h1>
        <Row>
          <BlueBorderTransCards coursesData={ecCouncilCourses} />
        </Row>
      </Container>
    </section>
  );
};

export default EcCouncilPages;
