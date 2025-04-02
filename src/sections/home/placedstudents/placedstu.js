import React from "react";
import "../placedstudents/placedstu.css";

// Import student images
import amitImg from "../../../assets/icons/avator.webp"; // Update paths to match your actual file structure
import azamImg from "../../../assets/icons/avator.webp";
import joyalImg from "../../../assets/icons/avator.webp";
import abhishekImg from "../../../assets/icons/avator.webp";
import amaanImg from "../../../assets/icons/avator.webp";
import sahilImg from "../../../assets/icons/avator.webp";
import { Container } from "react-bootstrap";
// Add more imports as needed

const PlacedStu = () => {
  const placedStudents = [
    {
      id: 1,
      name: "AMIT KUMAR",
      company: "WIPRO",
      image: amitImg,
    },
    {
      id: 2,
      name: "AZAM",
      company: "INFOSYS",
      image: azamImg,
    },
    {
      id: 3,
      name: "JOYAL",
      company: "TCS",
      image: joyalImg,
    },
    {
      id: 4,
      name: "ABHISHEK RAJ",
      company: "ACCENTURE",
      image: abhishekImg,
    },
    {
      id: 5,
      name: "AMAAN",
      company: "IBM",
      image: amaanImg,
    },
    {
      id: 6,
      name: "SAHIL KUSHWAH",
      company: "COGNIZANT",
      image: sahilImg,
    },
    // Duplicate some entries to demonstrate continuous scrolling
    {
      id: 7,
      name: "RAVI KUMAR",
      company: "MICROSOFT",
      image: amitImg,
    },
    {
      id: 8,
      name: "PRIYA SHARMA",
      company: "AMAZON",
      image: azamImg,
    },
  ];

  return (
    <div className="placed-students-container">
      <Container className="d-flex align-items-center justify-content-center">
        <h2 className="section-title text-center ">
          Students Placed after completing One year Cyber Security Diploma
        </h2>
      </Container>
      <div className="marquee-container">
        <div className="marquee-content">
          {placedStudents.map((student) => (
            <div key={student.id} className="student-card">
              <div className="student-image-container">
                <img
                  src={student.image}
                  alt={student.name}
                  className="student-image"
                />
              </div>
              <div className="student-name-ribbon">
                <div className="ribbon-background">
                  <span className="student-name">{student.name}</span>
                </div>
              </div>
              <div className="student-details">
                <p className="placed-text">PLACED IN</p>
                <p className="company-name">{student.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Container className="d-flex align-items-center justify-content-center">
        <h3 className="w-75 text-center mt-4">
          We use to track the process till you get placed or switch top domain
          and ensure to get updated with the latest skills.
        </h3>
      </Container>
    </div>
  );
};

export default PlacedStu;
