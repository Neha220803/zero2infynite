import React, { useState } from "react";
import "./whoAreWe.css";
import { Carousel } from "react-bootstrap";
// Only import the images we're actually using
import visionImage from "../../../assets/images/who_are_we_1.jpg";
import missionImage from "../../../assets/images/whowe.jpg";
import valuesImage from "../../../assets/images/whowe1.jpg";

const WhoWe = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const cardsData = [
    {
      id: 1,
      title: "Who are we?",
      description:
        "We strive to create innovative solutions that transform businesses and improve lives through technology.",
      img: visionImage,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "To deliver exceptional service and value to our clients while maintaining the highest standards of integrity and excellence.",
      img: missionImage,
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "We believe in collaboration, innovation, integrity, and creating a positive impact in everything we do.",
      img: valuesImage,
    },
  ];

  return (
    <div className="who-we-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000} // Auto-rotate every 5 seconds
        indicators={true}
        controls={true}
      >
        {cardsData.map((card) => (
          <Carousel.Item key={card.id}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="blue-overlay"></div>
              <div className="card-description">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default WhoWe;
