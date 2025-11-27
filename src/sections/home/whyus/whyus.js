import React, { useEffect } from "react";
import "./whyus.css";

// React icons
import { GiTeacher } from "react-icons/gi";
import {
  Award,
  BookHalf,
  BriefcaseFill,
  Calendar2Check,
  CurrencyDollar,
  Tools,
} from "react-bootstrap-icons";
import { PiCertificate } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

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
      title: "Real-Time Industry-Oriented Training",
      description:
        "Gain expertise with training designed to match real-time industry needs and practical applications.",
      icon: GiTeacher,
      colorClass: "grey-filter",
      hoverColor: "#6c757d",
    },
    {
      id: 2,
      title: "Updated Syllabus",
      description:
        "Learn from a constantly refreshed curriculum aligned with the latest tools and technologies.",
      icon: BookHalf,
      colorClass: "red-filter",
      hoverColor: "#dc3545",
    },
    {
      id: 3,
      title: "Flexible Learning Modes",
      description:
        "Choose from weekday, weekend, or fast-track sessions based on your convenience.",
      icon: Calendar2Check,
      colorClass: "blue-filter",
      hoverColor: "#007bff",
    },
    {
      id: 4,
      title: "Career Assistance & Job Referrals",
      description:
        "Get end-to-end career support with resume building, mock interviews, and job referrals.",
      icon: BriefcaseFill,
      colorClass: "green-filter",
      hoverColor: "#198754",
    },
    {
      id: 5,

      title: "Hands-On Practical Training",
      description:
        "Work on real-world projects and practical labs to strengthen applied knowledge.",
      icon: Award,
      colorClass: "teal-filter",
      hoverColor: "#20c997",
    },
    {
      id: 6,
      title: "Training Cost That Fits Your Budget",
      description:
        "Access quality training at affordable fees without compromising on standards.",
      icon: CurrencyDollar,
      colorClass: "yellow-filter",
      hoverColor: "#ffc107",
    },
    {
      id: 7,
      title: "100% Success Rate in Certification Prep",
      description:
        "Structured guidance, mock tests, and mentorship to clear global certifications confidently.",
      icon: PiCertificate,
      colorClass: "purple-filter",
      hoverColor: "#6f42c1",
    },
    {
      id: 8,
      title: "Job-Oriented Training",
      description:
        "Focused programs designed to equip you with skills that employers seek.",
      icon: Tools,
      colorClass: "orange-filter",
      hoverColor: "#fd7e14",
    },
    {
      id: 9,
      title: "Free Demo Sessions",
      icon: SiGoogleclassroom,
      description:
        "Experience the training quality firsthand with complimentary demo classes.",

      colorClass: "pink-filter",
      hoverColor: "#d63384",
    },
  ];

  return (
    <div className="why-us-container">
      <div className="text-center mb-3">
        <h2 className=" w-100">
          Why
          <span className="text-primary"> Zero2infynite</span> ?
        </h2>
      </div>

      <div className="container">
        <div className="row">
          {featuresData.map((feature) => {
            const IconComponent = feature.icon;
            return (
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
                    <IconComponent
                      className={`feature-icon ${feature.colorClass}`}
                    />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
