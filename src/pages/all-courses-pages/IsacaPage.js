import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueBorderTransCards from "../../components/cards/blueBorderTransCard";
import cisaLogo from "../../assets/images/all-courses/isaca/cisa-badge.svg";
import cismLogo from "../../assets/images/all-courses/isaca/cism-badge.svg";
import criscLogo from "../../assets/images/all-courses/isaca/crisc-badge.svg";

const IsacaPage = () => {
  const IsacaCourses = [
    {
      id: 1,
      img: cisaLogo,
      path: "/isaca/security-plus",
      name: "CISA",
    },
    {
      id: 2,
      img: cismLogo,
      path: "/isaca/cysa-plus",
      name: "CISM",
    },
    {
      id: 3,
      img: criscLogo,
      path: "/isaca/pentest-plus",
      name: "CRISC",
    },
  ];
  return (
    <section className="mb-5">
      <Row className="">
        <div className="text-center all-course-title my-3">
          <h1>
            Choose Your <span className="text-primary">ISACA Course</span> Now
          </h1>
        </div>
      </Row>
      <Container>
        <Row>
          <BlueBorderTransCards coursesData={IsacaCourses} />
        </Row>
      </Container>
    </section>
  );
};

export default IsacaPage;
