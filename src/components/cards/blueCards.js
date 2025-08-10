import React, { useState } from "react";
import { Card, CardText, CardTitle, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Course card component with individual hover state
const BlueCard = ({ title, description, icon, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <Card
      className="all-courses-cards h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <div className="d-flex align-items-start p-3">
        <div className="me-3" style={{ width: "90px" }}>
          {icon}
        </div>
        <div>
          <CardTitle className="text-white mb-2">{title}</CardTitle>
          <CardText className="text-white">{description}</CardText>
        </div>
      </div>

      {isHovered && (
        <div
          className="position-absolute d-flex align-items-center"
          style={{
            bottom: "15px",
            right: "15px",
            transition: "opacity 0.3s",
            opacity: isHovered ? 1 : 0,
            color: "white",
            cursor: "pointer", // Add cursor pointer to indicate it's clickable
          }}
          onClick={handleNavigate} // Add onClick handler to navigate
        >
          <span className="me-2">Click to Continue</span>
          <FaArrowRight />
        </div>
      )}
    </Card>
  );
};

// Container component that receives coursesData as props
const BlueCards = ({ coursesData }) => {
  return (
    <>
      {coursesData.map((course) => (
        <Col key={course.id} lg={4} md={6} className="mb-4">
          <BlueCard
            title={course.title}
            description={course.description}
            path={course.path} // Pass the path from coursesData
            icon={
              <img
                src={course.img}
                alt={course.title}
                style={{ width: "100%", height: "auto" }}
              />
            }
          />
        </Col>
      ))}
    </>
  );
};

export default BlueCards;
