import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueBorderTransCards from "../../components/cards/blueBorderTransCard";
import securityPlus from "../../assets/images/all-courses/comptia/securityplus-logo.png";
import networkPlus from "../../assets/images/all-courses/comptia/networkplus-logo.png";
import penTestPlus from "../../assets/images/all-courses/comptia/pentestplusjpg-logo.png";
import cysaPlus from "../../assets/images/all-courses/comptia/cybersecurityanalyst-logo.jpg";

const CompTIAPage = () => {
  const CompTIACourses = [
    {
      id: 1,
      img: securityPlus,
      path: "/comptia/security-plus",
      name: "CompTIA Security+",
    },
    {
      id: 2,
      img: cysaPlus,
      path: "/comptia/cysa-plus",
      name: "CompTIA CySA+",
    },
    {
      id: 3,
      img: penTestPlus,
      path: "/comptia/pentest-plus",
      name: "CompTIA PenTest+",
    },
    {
      id: 4,
      img: networkPlus,
      path: "/comptia/network-plus",
      name: "CompTIA Network+",
    },
  ];
  return (
    <section className="mb-5">
      <Row className="">
        <div className="text-center all-course-title my-3">
          <h1>
            Choose Your <span className="text-primary">CompTIA Course</span> Now
          </h1>
        </div>
      </Row>
      <Container>
        <Row>
          <BlueBorderTransCards coursesData={CompTIACourses} />
        </Row>
      </Container>
    </section>
  );
};
export default CompTIAPage;
