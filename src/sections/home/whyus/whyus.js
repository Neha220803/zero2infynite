import React, { useEffect } from "react";
import "../whyus/whyus.css";

// Icons (adjust if you have specific ones)
import trainerIcon from "../../../assets/icons/whyus/icon1.svg";
import handsOnIcon from "../../../assets/icons/whyus/icon2.svg";
import clockIcon from "../../../assets/icons/whyus/icon3.svg";
import moneyIcon from "../../../assets/icons/whyus/icon4.svg";
import labIcon from "../../../assets/icons/whyus/icon5.svg";
import interviewIcon from "../../../assets/icons/whyus/icon6.svg";

const WhyUs = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, 100 * index);
    });
  }, []);

  const featuresData = [
    {
      id: 1,
      title: "Industry-Driven Curriculum",
      description:
        "Stay ahead with training based on real-time industry standards and use cases.",
      img: trainerIcon,
    },
    {
      id: 2,
      title: "Hands-On Practical Learning",
      description:
        "Focused lab sessions and live projects to build real-world skills.",
      img: handsOnIcon,
    },
    {
      id: 3,
      title: "Expert-Led Training",
      description:
        "Learn from certified professionals with years of domain experience.",
      img: clockIcon,
    },
    {
      id: 4,
      title: "Certification Success Focus",
      description:
        "100% assistance for clearing global certifications with mock tests & prep.",
      img: moneyIcon,
    },
    {
      id: 5,
      title: "Flexible Learning Options",
      description:
        "Weekend, weekday, and fast-track batches to suit your schedule.",
      img: labIcon,
    },
    {
      id: 6,
      title: "Placement Support",
      description:
        "Get career guidance, resume building, and job referrals after course completion.",
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
          A choice that makes a big difference in your career. Zero to Infinite
          Security and Research is committed to helping students reach their
          goals through practical training and expert guidance.
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
