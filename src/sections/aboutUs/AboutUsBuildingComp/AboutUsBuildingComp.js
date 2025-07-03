import React, { useEffect, useRef } from "react";
import "./AboutUsBuildingComp.css"; // Use the CSS given below

const ElevatorComponent = () => {
  const containerRef = useRef();
  const elevatorRef = useRef();
  const labelRef = useRef();

  const totalFloors = 7;
  const floorHeight = 11200 / 7; // in px

  const trainingSteps = [
    "Hands-On Practical Training",
    "Job-Oriented Training",
    "Training cost that fits your budget",
    "Career Assistance & Job Referrals",
    "Flexible Learning Modes",
    "Updated syllabus",
    "Real time industry oriented training"
  ];

  useEffect(() => {
    let current = 0;
    let target = 0;
    let animationId;

    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollStart = windowHeight / 2;
      const scrollEnd = -rect.height + windowHeight / 2;

      let progress = 0;

      if (rect.top <= scrollStart && rect.top >= scrollEnd) {
        progress = (scrollStart - rect.top) / (scrollStart - scrollEnd);
      } else if (rect.top < scrollEnd) {
        progress = 1;
      }

      target = Math.max(0, Math.min(1, progress));
    };

    const animate = () => {
      current += (target - current) * 0.1;

      const elevatorY = current * (floorHeight * (totalFloors - 1));
      elevatorRef.current.style.transform = `translateY(${elevatorY}px)`;

      const currentFloor = Math.max(1, totalFloors - Math.floor(current * totalFloors));
      labelRef.current.textContent = currentFloor;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    animate();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="elevator-wrapper">
      <div className="building-container" ref={containerRef}>
        {/* Floors */}
        <div className="floors">
          {trainingSteps.map((text, index) => (
            <div className="floor" key={index}>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Elevator Shaft */}
        <div className="elevator-shaft">
          <div className="elevator" ref={elevatorRef}>
            <div className="person">
              <div className="head" />
              <div className="body" />
            </div>
            <div className="floor-label" ref={labelRef}>7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorComponent;
