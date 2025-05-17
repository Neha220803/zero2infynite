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
      title: "Software Development",
      description:
        "Software developers design, build, test, and maintain applications for various platforms and devices.",
      img: icon2,
      path: "/software-development",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Advanced cybersecurity certification for security professionals.",
      img: icon3,
      path: "/web-development",
    },
    {
      id: 4,
      title: "Finance & Accounting",
      description: "Cloud computing certifications for Amazon Web Services.",
      img: icon4,
      path: "/finance",
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "Learn digital marketing strategies and techniques for business growth.",
      img: icon5,
      path: "/digital-marketing",
    },
    {
      id: 6,
      title: "Mobile Development",
      description:
        "Learn to build native and cross-platform mobile applications.",
      img: icon6,
      path: "/mobile-development",
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
