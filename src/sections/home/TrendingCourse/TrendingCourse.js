import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./TrendingCourse.css";
import ceh from "../../../assets/images/ec-counsil/CEH.webp";
import chfi from "../../../assets/images/ec-counsil/CHFI.webp";
import ecih from "../../../assets/images/ec-counsil/ECIH.webp";
import cpent from "../../../assets/images/ec-counsil/CPENT.webp";
import cnd from "../../../assets/images/ec-counsil/CND.webp";
import wahs from "../../../assets/images/ec-counsil/WAHS.webp";
import casej from "../../../assets/images/ec-counsil/CASE-Java.webp";
import ethicalHackinglogo from "../../../assets/images/top-courses/ethical-hacking.png";
import pentestLogo from "../../../assets/images/top-courses/pen-test.png";

const courses = [
  // EC-Council Courses

  {
    title: "ECIH",
    logo: ecih,
    category: "EC-Council",
    path: "/ec-council/ecih",
    colSize: 2,
  },
  {
    title: "CPENT",
    logo: cpent,
    category: "EC-Council",
    path: "/ec-council/cpent",
    colSize: 2,
  },
  {
    title: "CEH",
    logo: ceh,
    category: "EC-Council",
    path: "/ethical-hacking-training-in-chennai",
    colSize: 4,
  },
  {
    title: "CND",
    logo: cnd,
    category: "EC-Council",
    path: "/ec-council/cnd",
    colSize: 2,
  },

  {
    title: "CHFI",
    logo: chfi,
    category: "EC-Council",
    path: "/ec-council/chfi",
    colSize: 2,
  },

  {
    title: "Web Pentesting",
    logo: wahs,
    category: "EC-Council",
    path: "/ec-council/wahs",
    colSize: 2,
  },
  {
    title: "CASE Java",
    logo: casej,
    category: "EC-Council",
    path: "/ec-council/case-java",
    colSize: 2,
  },

  // Zero2Infynite Custom
  {
    title: "Ethical Hacking",
    logo: ethicalHackinglogo,
    category: "Custom",
    path: "/courses/ethical-hacking",
    colSize: 2,
  },
  {
    title: "Pen Testing",
    logo: pentestLogo,
    category: "Custom",
    path: "/courses/pen-testing",
    colSize: 2,
  },
  {
    title: "Cyber Diploma",
    logo: "https://cdn-icons-png.flaticon.com/512/10484/10484458.png",
    category: "Custom",
    path: "/courses/cyber-diploma",
    special: "cyber-diploma",
    colSize: 4,
  },
  {
    title: "Artificial Intelligence",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    category: "Custom",
    path: "/courses/artificial-intelligence",
    colSize: 2,
  },
  {
    title: "Python",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    category: "Custom",
    path: "/courses/python",
    colSize: 2,
  },
  {
    title: "Networking",
    logo: "https://cdn-icons-png.flaticon.com/512/3786/3786085.png",
    category: "Custom",
    path: "/courses/networking",
    colSize: 2,
  },
  {
    title: "Cloud Computing",
    logo: "https://cdn-icons-png.flaticon.com/512/4319/4319147.png",
    category: "Custom",
    path: "/courses/cloud-computing",
    colSize: 2,
  },
  {
    title: "Full Stack Web Development",
    logo: "https://cdn-icons-png.flaticon.com/512/5433/5433706.png",
    category: "Custom",
    path: "/courses/full-stack-web-development",
    colSize: 2,
  },
  {
    title: "Java",
    logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    category: "Custom",
    path: "/courses/java",
    colSize: 2,
  },
  {
    title: ".NET Training",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    category: "Custom",
    path: "/courses/dotnet-training",
    colSize: 2,
  },
];

const TrendingCourses = () => {
  const navigate = useNavigate();

  const ecCouncilCourses = courses.filter(
    (course) => course.category === "EC-Council",
  );
  const customCourses = courses.filter(
    (course) => course.category === "Custom",
  );

  const handleCourseClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="trending-courses-section">
      <h2>
        Top-Rated Courses at <span className="highlight">Zero2Infynite</span>
      </h2>

      <h4 className="course-category-heading">EC-Council Courses</h4>
      <Row className="g-3 justify-content-center">
        {ecCouncilCourses.map((course, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={course.colSize}
            xl={course.colSize}
            className="d-flex justify-content-center"
          >
            <div
              className={`course-card ec-council ${
                index % 2 === 1 ? "alternate" : ""
              }`}
              onClick={() => handleCourseClick(course.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCourseClick(course.path);
                }
              }}
            >
              <img src={course.logo} alt={`${course.title} icon`} />
              <p>{course.title}</p>
            </div>
          </Col>
        ))}
      </Row>

      <h4 className="course-category-heading mt-5 mb-3">
        Custom Courses at Z2I
      </h4>

      <Row className="g-3 justify-content-center">
        {customCourses.map((course, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={course.colSize}
            xl={course.colSize}
            className="d-flex justify-content-center"
          >
            <div
              className={`course-card custom ${
                index % 2 === 0 ? "alternate" : ""
              }`}
              onClick={() => handleCourseClick(course.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCourseClick(course.path);
                }
              }}
            >
              <img src={course.logo} alt={`${course.title} icon`} />
              <p>{course.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingCourses;
