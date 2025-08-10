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
// import bblc from "../assets/images/ec-counsil/bblc.webp";
// import bfc from "../assets/images/ec-counsil/BFC.webp";
// import bdc from "../assets/images/ec-counsil/BDC.webp";
// import cciso from "../assets/images/ec-counsil/CCISO.webp";
import ecih from "../assets/images/ec-counsil/ECIH.webp";
import csa from "../assets/images/ec-counsil/CSA.webp";
import ctia from "../assets/images/ec-counsil/CTIA.webp";
// import edrp from "../assets/images/ec-counsil/EDRP.webp";
// import ecss from "../assets/images/ec-counsil/ECSS.webp";
// import cscu from "../assets/images/ec-counsil/CSCU.webp";
// import eces from "../assets/images/ec-counsil/ECES.webp";
// import nde from "../assets/images/ec-counsil/NDE.webp";
// import ehe from "../assets/images/ec-counsil/EHE.webp";
// import dfe from "../assets/images/ec-counsil/DFE.webp";
// import cct from "../assets/images/ec-counsil/CCT.webp";
import wahs from "../assets/images/ec-counsil/WAHS.webp";
// import tie from "../assets/images/ec-counsil/TIE.png";
// import ise from "../assets/images/ec-counsil/ISE.png";
// import cse from "../assets/images/ec-counsil/CSE.webp";
// import dse from "../assets/images/ec-counsil/DSE.webp";
// import sce from "../assets/images/ec-counsil/SCE.webp";
// import associatecciso from "../assets/images/ec-counsil/associate-cciso.jpg";

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
    // { id: 9, img: bblc, path: "/ec-council/bblc", name: "BBLC" },
    // { id: 10, img: bfc, path: "/ec-council/bfc", name: "BFC" },
    // { id: 11, img: bdc, path: "/ec-council/bdc", name: "BDC" },
    // { id: 12, img: cciso, path: "/ec-council/cciso", name: "CCISO" },
    { id: 13, img: ecih, path: "/ec-council/ecih", name: "ECIH" },
    { id: 14, img: csa, path: "/ec-council/csa", name: "CSA" },
    { id: 15, img: ctia, path: "/ec-council/ctia", name: "CTIA" },
    // { id: 16, img: edrp, path: "/ec-council/edrp", name: "EDRP" },
    // { id: 17, img: ecss, path: "/ec-council/ecss", name: "ECSS" },
    // { id: 18, img: cscu, path: "/ec-council/cscu", name: "CSCU" },
    // { id: 19, img: eces, path: "/ec-council/eces", name: "ECES" },
    // { id: 20, img: nde, path: "/ec-council/nde", name: "NDE" },
    // { id: 21, img: ehe, path: "/ec-council/ehe", name: "EHE" },
    // { id: 22, img: dfe, path: "/ec-council/dfe", name: "DFE" },
    // { id: 23, img: cct, path: "/ec-council/cct", name: "CCT" },
    { id: 24, img: wahs, path: "/ec-council/wahs", name: "WAHS" },
    // { id: 25, img: tie, path: "/ec-council/tie", name: "TIE" },
    // { id: 26, img: ise, path: "/ec-council/ise", name: "ISE" },
    // { id: 27, img: cse, path: "/ec-council/cse", name: "CSE" },
    // { id: 28, img: dse, path: "/ec-council/dse", name: "DSE" },
    // { id: 29, img: sce, path: "/ec-council/sce", name: "SCE" },
    // { id: 30, img: associatecciso, path: "/ec-council/associate-cciso", name: "Associate-CCISO" },
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
