import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueBorderTransCards from "../components/cards/blueBorderTransCard";

// Import your images - update these paths to match your project structure
import cehImage from "../assets/images/ec-courses/ceh.png";
import cpentImage from "../assets/images/ec-courses/cpent.png";
import chfiImage from "../assets/images/ec-courses/chfi.png";
import cndImage from "../assets/images/ec-courses/cnd.png";
import LPTImage from "../assets/images/ec-courses/LPT.png";
import ecihImage from "../assets/images/ceh.png";
import ecsaImage from "../assets/images/ec-courses/ecsa.png";

const EcCouncilPages = () => {
  // Data for courses
  const ecCouncilCourses = [
    {
      id: 1,
      img: cehImage,
      path: "/ethical-hacking-training-in-chennai",
      name: "CEH",
    },
    {
      id: 2,
      img: cpentImage,
      path: "/ec-council/cpent",
      name: "CPENT",
    },
    {
      id: 3,
      img: ecsaImage,
      path: "/ec-council/ecsa",
      name: "ECSA",
    },
    {
      id: 4,
      img: cndImage,
      path: "/ec-council/cnd",
      name: "CND",
    },
    {
      id: 5,
      img: chfiImage,
      path: "/ec-council/chfi",
      name: "CHFI",
    },
    {
      id: 6,
      img: LPTImage,
      path: "/ec-council/lpt",
      name: "LPT",
    },
  ];

  return (
    <section className="mb-5">
      <Row className="">
        <div className="text-center all-course-title">
          <h1>
            Choose Your <span className="text-primary">EC Council Course</span>{" "}
            Now
          </h1>
        </div>
      </Row>
      <Container>
        <Row>
          <BlueBorderTransCards coursesData={ecCouncilCourses} />
        </Row>
      </Container>
    </section>
  );
};

export default EcCouncilPages;
