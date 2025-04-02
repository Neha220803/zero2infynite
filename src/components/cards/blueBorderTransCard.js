import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./customCards.css";

// Simplified component that only receives image and path props
const BlueBorderTransCard = ({ image, path }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <Card
      className="blue-border-trans-card h-100"
      style={{ position: "relative" }}
    >
      <div className="card-image-container" onClick={handleNavigate}>
        <img
          src={image}
          alt="Card image"
          className="card-img"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Card>
  );
};

const BlueBorderTransCards = ({ coursesData }) => {
  return (
    <>
      {coursesData.map((course) => (
        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
          <BlueBorderTransCard image={course.img} path={course.path} />
        </div>
      ))}
    </>
  );
};

export default BlueBorderTransCards;
