import React from "react";
import { Card, CardImg, CardTitle } from "react-bootstrap";
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
      className="blue-border-trans-card gap-2 h-100 "
      style={{ position: "relative" }}
    >
      <CardImg
        src={image}
        alt="Card image"
        className="blue-border-transcard-img"
        onClick={handleNavigate}
      />
      <CardTitle>
        <h5 className="text-primary mb-0">{name}</h5>
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
