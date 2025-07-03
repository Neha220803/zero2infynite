import React, { useEffect, useRef } from "react";
import "./AboutUsBuildingComp.css";

const ElevatorComponent = () => {
  const containerRef = useRef();
  const elevatorRef = useRef();
  const labelRef = useRef();
  const totalFloors = 7;
  const shaftHeight = 700; // px, matches .building-container height
  const floorHeight = shaftHeight / totalFloors;

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

      // Calculate scroll progress for elevator movement
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
      current += (target - current) * 1.3;
      // Smooth animation
      const elevatorY = current * (floorHeight * (totalFloors - 1));
      if (elevatorRef.current) {
        elevatorRef.current.style.transform = `translateX(-50%) translateY(${elevatorY}px)`;
      }
      const currentFloor = Math.max(
        1,
        totalFloors - Math.floor(current * totalFloors)
      );
      if (labelRef.current) {
        labelRef.current.textContent = currentFloor;
      }
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
              <span className="floor-label">{totalFloors - index}</span>
              {text}
            </div>
          ))}
        </div>
        {/* Elevator Shaft */}
        <div className="elevator-shaft">
          <div className="elevator" ref={elevatorRef}>
            <div className="person">
              <div className="head"></div>
              <div className="body"></div>
            </div>
            <span className="floor-label" ref={labelRef}>
              {totalFloors}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatorComponent;
