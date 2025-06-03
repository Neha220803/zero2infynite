import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./TrendingCourse.css"; // Import the custom styles
import ceh from "../../../assets/images/ec-courses/ceh.png";
import chfi from "../../../assets/images/ec-courses/chfi.png";
import ecih from "../../../assets/images/ec-courses/ecih.png";
import cpent from "../../../assets/images/ec-courses/cpent.png";
import cnd from "../../../assets/images/ec-courses/cnd.png";
import { Container } from "react-bootstrap";

const courses = [
  // EC-Council Courses
  {
    title: "CEH",
    logo: ceh,
    category: "EC-Council",
    path: "/ethical-hacking-training-in-chennai", // Add navigation path
  },
  {
    title: "CHFI",
    logo: chfi,
    category: "EC-Council",
    path: "/ec-council/chfi",
  },
  {
    title: "CPENT",
    logo: cpent,
    category: "EC-Council",
    path: "/ec-council/cpent",
  },
  {
    title: "CND",
    logo: cnd,
    category: "EC-Council",
    path: "/ec-council/cnd",
  },
  {
    title: "ECIH",
    logo: ecih,
    category: "EC-Council",
    path: "/ec-council/ecih",
  },
  {
    title: "Web Pentesting",
    logo: "https://cdn-icons-png.flaticon.com/512/10701/10701191.png",
    category: "EC-Council",
    path: "/ec-council/web-pentesting",
  },
  {
    title: "CASE Java",
    logo: "https://www.afralti.org/wp-content/uploads/2020/08/CASE.png",
    category: "EC-Council",
    path: "/ec-council/case-java",
  },

  // Zero2Infynite Custom
  {
    title: "Ethical Hacking",
    logo: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    category: "Custom",
    path: "/courses/ethical-hacking",
  },
  {
    title: "Pen Testing",
    logo: "https://cdn-icons-png.freepik.com/256/16196/16196553.png?semt=ais_hybrid",
    category: "Custom",
    path: "/courses/pen-testing",
  },
  {
    title: "Cyber Diploma",
    logo: "https://cdn-icons-png.flaticon.com/512/10484/10484458.png",
    category: "Custom",
    path: "/courses/cyber-diploma",
  },
  {
    title: "Java",
    logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    category: "Custom",
    path: "/courses/java",
  },
  {
    title: "Python",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    category: "Custom",
    path: "/courses/python",
  },
  {
    title: "Networking",
    logo: "https://cdn-icons-png.flaticon.com/512/3786/3786085.png",
    category: "Custom",
    path: "/courses/networking",
  },
  {
    title: "Cloud Computing",
    logo: "https://cdn-icons-png.flaticon.com/512/4319/4319147.png",
    category: "Custom",
    path: "/courses/cloud-computing",
  },
  {
    title: ".NET Training",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    category: "Custom",
    path: "/courses/dotnet-training",
  },
  {
    title: "Full Stack Web Development",
    logo: "https://cdn-icons-png.flaticon.com/512/5433/5433706.png",
    category: "Custom",
    path: "/courses/full-stack-web-development",
  },
  {
    title: "Artificial Intelligence",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    category: "Custom",
    path: "/courses/artificial-intelligence",
  },
];

const TrendingCourses = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const ecCouncilCourses = courses.filter(
    (course) => course.category === "EC-Council"
  );
  const customCourses = courses.filter(
    (course) => course.category === "Custom"
  );

  // Handle course card click
  const handleCourseClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="trending-courses-section">
      <h2>
        Top-Rated Courses at <span className="highlight">Zero2Infynite</span>
      </h2>

      <h4 className="course-category-heading">EC-Council Courses</h4>
      <div className="course-grid">
        {ecCouncilCourses.map((course, index) => (
          <div
            key={index}
            className="course-card ec-council"
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
        ))}
      </div>

      <h4 className="course-category-heading">Custom Courses at Z2I</h4>
      <div className="course-grid">
        {customCourses.map((course, index) => (
          <div
            key={index}
            className="course-card custom"
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
        ))}
      </div>
    </Container>
  );
};

export default TrendingCourses;
