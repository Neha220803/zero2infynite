import React from "react";
import { Card, CardImg, CardText, CardTitle } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./customCards.css";

// Simplified component that only receives image and path props
const BlueBorderTransCard = ({ image, path, name }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <Card
      className="blue-border-trans-card h-100 "
      style={{ position: "relative" }}
    >
      <CardImg
        src={image}
        alt="Card image"
        className=""
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "200px",
          minHeight: "200px",
        }}
        onClick={handleNavigate}
      />
      <CardTitle>
        <h5 className="text-primary">{name}</h5>
      </CardTitle>
      {/* <CardText className="text-secondary">
        Learn More <RiArrowDropRightLine size={30} />
      </CardText> */}
    </Card>
  );
};

const BlueBorderTransCards = ({ coursesData }) => {
  return (
    <>
      {coursesData.map((course) => (
        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
          <BlueBorderTransCard
            image={course.img}
            path={course.path}
            name={course.name}
          />
        </div>
      ))}
    </>
  );
};

export default BlueBorderTransCards;
