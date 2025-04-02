import React, { useEffect } from "react";
import "../whyus/whyus.css";

// Import icons from assets (adjust paths as needed)
import trainerIcon from "../../../assets/icons/whyus/icon1.svg";
import handsOnIcon from "../../../assets/icons/whyus/icon2.svg";
import clockIcon from "../../../assets/icons/whyus/icon2.svg";
import moneyIcon from "../../../assets/icons/whyus/icon1.svg";
import labIcon from "../../../assets/icons/whyus/icon1.svg";
import interviewIcon from "../../../assets/icons/whyus/icon1.svg";

const WhyUs = () => {
  // Add animation effect when component mounts
  useEffect(() => {
    // Animation for cards on page load
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, 100 * index);
    });
  }, []);
  // Create a data array for the feature cards
  const featuresData = [
    {
      id: 1,
      title: "IT Expert as Trainers",
      description:
        "Learning Technonology with a professional who is well expertise in that solve 60% of your needs",
      img: trainerIcon,
    },
    {
      id: 2,
      title: "Fully Hands-on Training",
      description:
        "We Support any Training with more practical so. we always prefers to give hands-on training",
      img: handsOnIcon,
    },
    {
      id: 3,
      title: "Flexible Timings",
      description:
        "We Started with w trainers now we are 100+ and its still increasing. so we can give the students flexibility timings",
      img: clockIcon,
    },
    {
      id: 4,
      title: "Affordable Fees",
      description:
        "We are Dead Cheap fees. Quality training with less price is only at Zero to Infinite security and research",
      img: moneyIcon,
    },
    {
      id: 5,
      title: "Lab Support",
      description:
        "If you software assistance we are here to back you up. Bring your laptopand load the required software and learn.",
      img: labIcon,
    },
    {
      id: 6,
      title: "Interview Preparation",
      description:
        "Every course in covered with interview point question and real-time scenarios of what the company may look after from you.",
      img: interviewIcon,
    },
  ];

  return (
    <div className="why-us-container">
      <div className="text-center mb-5">
        <h2 className="section-titl">
          Why to <span className="text-primary">Choose Us</span> ?
        </h2>
        <p className="section-description">
          A Choise that makes a big difference in your career. Zero to Infinet
          security and research is committed to helping its students to reach
          their goals and their training experience by providing the innovative
          surrounding and faculties
        </p>
      </div>

      <div className="container">
        <div className="row">
          {featuresData.map((feature) => (
            <div className="col-md-4 mb-4" key={feature.id}>
              <div
                className="feature-card"
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("hover-effect")
                }
                onMouseLeave={(e) =>
                  e.currentTarget.classList.remove("hover-effect")
                }
              >
                <div className="icon-container">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="feature-icon"
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
