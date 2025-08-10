import React, { useEffect } from "react";
// import labIcon from "../../../assets/icons/whyus/icon5.svg";
// import interviewIcon from "../../../assets/icons/whyus/icon6.svg";
import supportIcon from "../../../assets/images/internship/bx_support.svg";
import clipboardIcon from "../../../assets/images/internship/tdesign_task-1-filled.svg";
import StonksIcon from "../../../assets/images/internship/carbon_skill-level-advanced.svg";
import dicoverIcon from "../../../assets/images/internship/discover icon.svg";
import exposureIcon from "../../../assets/images/internship/exporuseIcon.svg";
import careeBoostIcon from "../../../assets/images/internship/carrerBoostIcon.svg";
import trainerIcon from "../../../assets/images/internship/trainerIcon.svg";
import theoryIcon from "../../../assets/images/internship/theoryPracticeIcon.svg";
import certificateIcon from "../../../assets/images/internship/certificateIcon.svg";

const WhyInternAtZ2IComp = () => {
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
      title: "Practical Exposure",
      description:
        "Gain hands-on exposure to how theories and tools are used in live environments",
      img: exposureIcon,
      colorClass: "red-filter",
      hoverColor: "#dc3545",
    },
    {
      id: 2,
      title: "Expert Curriculum",
      description:
        "Our trainers designed syllabus for colleges, universities and professional certifications",
      img: trainerIcon,
      colorClass: "blue-filter",
      hoverColor: "#007bff",
    },
    {
      id: 3,
      title: "Career Boost",
      description:
        "Get a chance to become an extended intern with job referrals and placement assistance",
      img: careeBoostIcon,
      colorClass: "grey-filter",
      hoverColor: "#6c757d",
    },
    {
      id: 4,
      title: "Domain Discovery",
      description:
        "Discover which cybersecurity domain suits you best (e.g., SOC, Pentesting , GRC, CloudSecurity)",
      img: dicoverIcon,

      colorClass: "yellow-filter",
      hoverColor: "#ffc107",
    },
    {
      id: 5,
      title: "Theory Practice",
      description:
        "Learn how academic concepts are applied in corporate scenarios.",
      img: theoryIcon,
      colorClass: "green-filter",
      hoverColor: "#198754",
    },
    {
      id: 6,
      title: "Certified Advantage",
      description:
        "Internship certificates enhance your LinkedIn and resume visibility",
      img: certificateIcon,
      colorClass: "orange-filter",
      hoverColor: "#fd7e14",
    },
    {
      id: 7,
      title: "Skill Empowerment",
      description:
        "Gain confidence in your abilities through problem-solving and decision-making",
      img: StonksIcon,
      colorClass: "grey-filter",
      hoverColor: "#6c757d",
    },
    {
      id: 8,
      title: "Efficiency Skills",
      description:
        "Learn time management, task prioritization, and professional discipline",
      img: clipboardIcon,
      colorClass: "blue-filter",
      hoverColor: "#007bff",
    },
    {
      id: 9,
      title: "Career Support",
      description:
        "Get recommendations or references for future job opportunities",
      img: supportIcon,

      colorClass: "red-filter",
      hoverColor: "#dc3545",
    },
  ];
  return (
    <div className="why-us-container">
      <div className="text-center mb-5">
        <h2 className=" w-100">
          Why to do Intern in{" "}
          <span className="text-primary">Zero2infynite</span> ?
        </h2>
        {/* <p className="section-description">
      A choice that makes a big difference in your career. Zero to Infinite
      Security and Research is committed to helping students reach their
      goals through practical training and expert guidance.
    </p> */}
      </div>

      <div className="container">
        <div className="row">
          {featuresData.map((feature) => (
            <div className="col-md-4 mb-4" key={feature.id}>
              <div
                className={`feature-card ${feature.colorClass}-card`}
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
                    className={`feature-icon ${feature.colorClass}`}
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

export default WhyInternAtZ2IComp;
