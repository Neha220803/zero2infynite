import React from "react";
import "./TrendingCourse.css"; // Import the custom styles
import ceh from "../../../assets/images/ec-courses/ceh.png";
import chfi from "../../../assets/images/ec-courses/ecih.png";
import cpent from "../../../assets/images/ec-courses/cpent.png";
import cnd from "../../../assets/images/ec-courses/cnd.png";
import { Container } from "react-bootstrap";

const courses = [
  // EC-Council Courses
  {
    title: "CEH",
    logo: ceh,
    category: "EC-Council",
  },
  {
    title: "CHFI",
    logo: chfi,
    category: "EC-Council",
  },
  {
    title: "CPENT",
    logo: cpent,
    category: "EC-Council",
  },
  {
    title: "CND",
    logo: cnd,
    category: "EC-Council",
  },
  {
    title: "ECIH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Security_icon.png",
    category: "EC-Council",
  },
  {
    title: "Web Pentesting",
    logo: "https://cdn-icons-png.flaticon.com/512/10701/10701191.png",
    category: "EC-Council",
  },
  {
    title: "CASE Java",
    logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    category: "EC-Council",
  },

  // Zero2Infynite Custom
  {
    title: "Ethical Hacking",
    logo: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    category: "Custom",
  },
  {
    title: "Pen Testing",
    logo: "https://cdn-icons-png.flaticon.com/512/8115/8115616.png",
    category: "Custom",
  },
  {
    title: "Cyber Diploma",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    category: "Custom",
  },
  {
    title: "Java",
    logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    category: "Custom",
  },
  {
    title: "Python",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    category: "Custom",
  },
  {
    title: "Networking",
    logo: "https://cdn-icons-png.flaticon.com/512/1048/1048948.png",
    category: "Custom",
  },
  {
    title: "Cloud Computing",
    logo: "https://cdn-icons-png.flaticon.com/512/4144/4144374.png",
    category: "Custom",
  },
  {
    title: ".NET Training",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
    category: "Custom",
  },
  {
    title: "Full Stack Web Dev",
    logo: "https://cdn-icons-png.flaticon.com/512/8090/8090406.png",
    category: "Custom",
  },
  {
    title: "Artificial Intelligence",
    logo: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    category: "Custom",
  },
];

const TrendingCourses = () => {
  const ecCouncilCourses = courses.filter(
    (course) => course.category === "EC-Council"
  );
  const customCourses = courses.filter(
    (course) => course.category === "Custom"
  );

  return (
    <Container className="trending-courses-section">
      <h2>
        Top-Rated Courses at <span className="highlight">Zero2Infynite</span>
      </h2>

      <h4 className="course-category-heading">EC-Council Courses</h4>
      <div className="course-grid">
        {ecCouncilCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.logo} alt={`${course.title} icon`} />
            <p>{course.title}</p>
          </div>
        ))}
      </div>

      <h4 className="course-category-heading">Custom Courses at Z2I</h4>
      <div className="course-grid">
        {customCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.logo} alt={`${course.title} icon`} />
            <p>{course.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingCourses;
