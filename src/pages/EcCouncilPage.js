import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueBorderTransCards from "../components/cards/blueBorderTransCard";

// Import your images - update these paths to match your project structure
import ceh from "../assets/images/ec-counsil/CEH.webp";
import cpent from "../assets/images/ec-counsil/CPENT.webp";
import chfi from "../assets/images/ec-counsil/CHFI.webp";
import cnd from "../assets/images/ec-counsil/CND.webp";
import ccse from "../assets/images/ec-counsil/CCSE.webp";
import ecde from "../assets/images/ec-counsil/ECDE.webp";
import casenet from "../assets/images/ec-counsil/CASE-Net.webp";
import casejava from "../assets/images/ec-counsil/CASE-Java.webp";
import ecih from "../assets/images/ec-counsil/ECIH.webp";
import csa from "../assets/images/ec-counsil/CSA.webp";
import ctia from "../assets/images/ec-counsil/CTIA.webp";
import wahs from "../assets/images/ec-counsil/WAHS.webp";

const EcCouncilPages = () => {
  // Data for courses
  const ecCouncilCourses = [
    {
      id: 1,
      img: ceh,
      path: "/ethical-hacking-training-in-chennai",
      name: "CEH",
    },
    { id: 2, img: cpent, path: "/ec-council/cpent", name: "CPENT" },
    { id: 3, img: chfi, path: "/ec-council/chfi", name: "CHFI" },
    { id: 4, img: cnd, path: "/ec-council/cnd", name: "CND" },
    { id: 5, img: ccse, path: "/ec-council/ccse", name: "CCSE" },
    { id: 6, img: ecde, path: "/ec-council/ecde", name: "ECDE" },
    { id: 7, img: casenet, path: "/ec-council/case-net", name: "CASE .Net" },
    { id: 8, img: casejava, path: "/ec-council/case-java", name: "CASE Java" },
    { id: 13, img: ecih, path: "/ec-council/ecih", name: "ECIH" },
    { id: 14, img: csa, path: "/ec-council/csa", name: "CSA" },
    { id: 15, img: ctia, path: "/ec-council/ctia", name: "CTIA" },
    { id: 24, img: wahs, path: "/ec-council/wahs", name: "WAHS" },
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
