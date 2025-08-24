import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueCards from "../../components/cards/blueCards";
import {
  Award,
  Cloud,
  Laptop,
  Mortarboard,
  ShieldCheck,
} from "react-bootstrap-icons";
import { BookOpen } from "lucide-react";

const AllCourses = () => {
  const coursesData = [
    {
      id: 1,
      title: "EC-Council Courses",
      description:
        "EC-Council offers cybersecurity certifications like CEH, CND, and ECIH.",
      icon: ShieldCheck,
      path: "/ec-council",
    },
    {
      id: 2,
      title: "CompTIA Courses",
      description:
        "CompTIA offers a range of IT certifications, including A+, Network+, and Security+.",
      icon: Laptop,
      path: "/comptia",
    },
    {
      id: 3,
      title: "ISACA Certifications",
      description:
        "ISACA offers certifications like CISM, CISA, and CRISC for IT governance.",
      icon: Award,
      path: "/isaca",
    },
    {
      id: 5,
      title: "Cloud Computing",
      description: "Cloud computing certifications for Amazon Web Services.",
      icon: Cloud,
      path: "/cloud-computing",
    },
    {
      id: 6,
      title: "Cyber Diploma course",
      description:
        "A comprehensive diploma course covering various aspects of cybersecurity.",
      icon: Mortarboard,
      path: "/z2i-cyber-diploma",
    },
    {
      id: 9,
      title: "Z2i Custom Courses",
      description:
        "Tailored cybersecurity and IT training programs designed to meet specific learning needs.",
      icon: BookOpen,

      path: "/z2i-custom-courses",
    },
  ];

  return (
    <Container>
      <h1 className="text-md-center my-md-4 my-3">
        Choose Your <span className="text-primary">Courses</span> Now
      </h1>
      <Row className="pb-5">
        <BlueCards coursesData={coursesData} />
      </Row>
    </Container>
  );
};

export default AllCourses;
