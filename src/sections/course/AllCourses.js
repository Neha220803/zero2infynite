import React from "react";
import { Container, Row } from "react-bootstrap";
import BlueCards from "../../components/cards/blueCards";
import "./AllCourses.css";

// Import course icons
import icon1 from "../../assets/icons/course1.svg";
import icon2 from "../../assets/icons/course2.svg";
import icon3 from "../../assets/icons/course3.svg";
import icon4 from "../../assets/icons/course4.svg";
import icon5 from "../../assets/icons/course5.svg";
import icon6 from "../../assets/icons/course6.svg";

const AllCourses = () => {
  // Course data with imported SVG icons and path URLs
  const coursesData = [
    {
      id: 1,
      title: "EC-Council Courses",
      description:
        "EC-Council offers cybersecurity certifications like CEH, CND, and ECIH.",
      img: icon1,
      path: "/ec-council",
    },
    {
      id: 2,
      title: "CompTIA Courses",
      description:
        "CompTIA offers a range of IT certifications, including A+, Network+, and Security+.",
      img: icon6,
      path: "/comptia",
    },
    {
      id: 3,
      title: "ISACA Certifications",
      description:
        "ISACA offers certifications like CISM, CISA, and CRISC for IT governance.",
      img: icon2,
      path: "/isaca",
    },

    {
      id: 4,
      title: "Fullstack Web Development",
      description:
        "Comprehensive training covering both frontend and backend technologies in javascript, java or dot net frameworks.",
      img: icon3,
      path: "/web-development",
    },
    {
      id: 5,
      title: "Cloud Computing",
      description: "Cloud computing certifications for Amazon Web Services.",
      img: icon4,
      path: "/finance",
    },
    {
      id: 6,
      title: "Cyber Diploma course",
      description:
        "A comprehensive diploma course covering various aspects of cybersecurity.",
      img: icon5,
      path: "/z2i-cyber-diploma",
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      description:
        "Learn the fundamentals of AI, including machine learning and neural networks.",
      img: icon5,
      path: "/artificial-intelligence",
    },
    {
      id: 8,
      title: "Programming & Development",
      description:
        "Learn the fundamentals of programming, including popular languages like python, java, .net frameworks.",
      img: icon5,
      path: "/programming-development",
    },
    {
      id: 9,
      title: "Networking & Cybersecurity",
      description:
        "Learn the fundamentals of networking and cybersecurity (pentesting), including key concepts and best practices.",
      img: icon5,
      path: "/networking-cybersecurity",
    },
  ];

  return (
    <div className="mb-5">
      <div className="text-center  all-course-title">
        <h1>
          Choose Your <span className="text-primary">Courses</span> Now
        </h1>
      </div>
      <Container>
        <Row className="mb-4"></Row>
        <Row>
          <BlueCards coursesData={coursesData} />
        </Row>
      </Container>
    </div>
  );
};

export default AllCourses;
