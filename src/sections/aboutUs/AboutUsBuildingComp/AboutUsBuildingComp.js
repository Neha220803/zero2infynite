import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutUsBuildingComp.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUsBuildingComp = () => {
  const containerRef = useRef(null);
  const elevatorRef = useRef(null);
  const progressFillRef = useRef(null);
  const progressTextRef = useRef(null);
  const elevatorIndicatorRef = useRef(null);
  const buildingContainerRef = useRef(null);

  const trainingSteps = [
    "Hands-On Practical Training",
    "Job-Oriented Training",
    "Training cost that fits your budget",
    "Career Assistance & Job Referrals",
    "Flexible Learning Modes",
    "Updated syllabus",
    "Real time industry oriented training",
  ];

  useEffect(() => {
    const elevator = elevatorRef.current;
    const progressFill = progressFillRef.current;
    const progressText = progressTextRef.current;
    const elevatorIndicator = elevatorIndicatorRef.current;
    const buildingContainer = buildingContainerRef.current;
    const container = containerRef.current;

    if (
      !elevator ||
      !progressFill ||
      !progressText ||
      !elevatorIndicator ||
      !buildingContainer ||
      !container
    ) {
      return;
    }

    // Building animation setup
    // Container shows 60vh, building is 140vh total
    // At scroll start: floors 7,6,5 visible (building at y: 0)
    // At scroll end: floors 3,2,1 visible (building at y: -80vh)

    // Initialize entrance animation
    gsap.set(buildingContainer, {
      scale: 0.8,
      opacity: 0,
      y: 50,
    });

    gsap.set(".floor-text", {
      x: -30,
      opacity: 0,
    });

    gsap.set(buildingContainer.querySelector(".building"), {
      y: 0, // Start with floors 7,6,5 visible (top floors)
    });

    gsap.set(elevator, {
      y: "1vh", // Start at top floor (1vh offset)
      scale: 0.9,
    });

    // Entrance animation sequence
    const tl = gsap.timeline();

    tl.to(buildingContainer, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "back.out(1.2)",
    }).to(
      elevator,
      {
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.2)",
      },
      "-=0.5"
    );

    // Scroll-triggered elevator animation
    const scrollTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 0.2, // Very responsive to scroll
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            progressFill.style.width = progress * 100 + "%";

            // Calculate current training step
            const currentStepIndex = Math.floor(progress * 6.99);
            const currentStep = trainingSteps[currentStepIndex];

            // Update progress text
            if (progress < 0.1) {
              progressText.textContent = "Ready to Start";
            } else if (progress > 0.9) {
              progressText.textContent = "Training Complete!";
            } else {
              progressText.textContent = currentStep || "In Progress...";
            }

            // Update elevator floor indicator (starts at 7, goes down to 1)
            const currentFloor = Math.max(
              1,
              Math.min(7, 7 - Math.floor(progress * 6.99))
            );
            elevatorIndicator.textContent = currentFloor;

            // Add visual feedback for completion
            if (progress > 0.8) {
              elevator.style.background =
                "linear-gradient(135deg, #48BB78, #38A169)";
              elevator.style.boxShadow = "0 4px 20px rgba(72, 187, 120, 0.4)";
            } else {
              elevator.style.background =
                "linear-gradient(135deg, #4299E1, #3182CE)";
              elevator.style.boxShadow = "0 4px 12px rgba(44, 82, 130, 0.3)";
            }
          },
        },
      })
      // Move the building to show different floors
      .to(
        buildingContainer.querySelector(".building"),
        {
          y: "-93.33vh", // Move building up to show floors 3,2,1 at the end (163.33vh - 70vh)
          duration: 1,
          ease: "none",
        },
        0
      )
      // Move the elevator down through the floors
      .to(
        elevator,
        {
          y: "140vh", // Move elevator to bottom floor area
          duration: 1,
          ease: "none",
        },
        0
      );

    // Animate floor texts as they come into focus
    gsap.utils.toArray(".floor-text").forEach((text, index) => {
      gsap.to(text, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(text, {
              scale: 1.05,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
            });
          },
        },
      });
    });

    // Add floating animation to the plant
    gsap.to(".plant-icon", {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Grid cells animation
    gsap.utils.toArray(".grid-cell").forEach((cell, index) => {
      gsap.to(cell, {
        backgroundColor: "rgba(44, 82, 130, 0.1)",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        delay: index * 0.1,
        ease: "power2.inOut",
      });
    });

    // Elevator person breathing animation
    gsap.to(".person-body", {
      scaleY: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Add elevator movement visual feedback
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
      onUpdate: (self) => {
        if (self.velocity > 0.1 || self.velocity < -0.1) {
          gsap.to(elevator, {
            x: Math.random() * 2 - 1,
            duration: 0.1,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
          });
        }
      },
    });

    // Add completion celebration
    ScrollTrigger.create({
      trigger: container,
      start: "80% center",
      onEnter: () => {
        gsap.to(progressText, {
          scale: 1.1,
          color: "#48BB78",
          duration: 0.5,
          yoyo: true,
          repeat: 1,
        });
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <>
      <section className="building-animation-container" ref={containerRef}>
        {/* Header Section */}
        <div className="building-header">
          <div className="plant-icon">
            <svg
              className="plant-image"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C12.5523 22 13 21.5523 13 21V12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V21C11 21.5523 11.4477 22 12 22Z"
                fill="#2C5282"
              />
              <path
                d="M20 14C20 11.7909 18.2091 10 16 10C15.2663 10 14.5972 10.2386 14.0555 10.6395C13.4254 9.06451 11.8456 8 10 8C7.79086 8 6 9.79086 6 12C6 12.7337 6.23858 13.4028 6.63954 13.9445C5.06451 14.5746 4 16.1544 4 18C4 20.2091 5.79086 22 8 22H16C18.2091 22 20 20.2091 20 18V14Z"
                fill="#48BB78"
              />
              <path
                d="M8 2C8 3.10457 8.89543 4 10 4H14C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0H10C8.89543 0 8 0.895431 8 2Z"
                fill="#2C5282"
              />
            </svg>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="building-progress-container">
          <div className="building-progress-bar">
            <div className="building-progress-fill" ref={progressFillRef}></div>
          </div>
          <div className="building-progress-text" ref={progressTextRef}>
            Ready to Start
          </div>
        </div>

        {/* Building Container */}
        <div className="building-container" ref={buildingContainerRef}>
          <div className="building">
            {/* Training Floors */}
            <div className="floor floor-7">
              <div className="floor-content">
                <span className="floor-text">Hands-On Practical Training</span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-6">
              <div className="floor-content">
                <span className="floor-text">Job-Oriented Training</span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-5">
              <div className="floor-content">
                <span className="floor-text">
                  Training cost that fits your budget
                </span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-4">
              <div className="floor-content">
                <span className="floor-text">
                  Career Assistance & Job Referrals
                </span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-3">
              <div className="floor-content">
                <span className="floor-text">Flexible Learning Modes</span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-2">
              <div className="floor-content">
                <span className="floor-text">Updated syllabus</span>
              </div>
              <div className="floor-divider"></div>
            </div>

            <div className="floor floor-1">
              <div className="floor-content">
                <span className="floor-text">
                  Real time industry oriented training
                </span>
              </div>
            </div>

            {/* Right side grid with elevator */}
            <div className="side-grid">
              <div className="grid-column">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
              </div>
              <div className="grid-column elevator-column">
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>
                <div className="grid-cell"></div>

                {/* Elevator inside the grid */}
                <div className="elevator" ref={elevatorRef}>
                  <div className="elevator-person">
                    <div className="person-head"></div>
                    <div className="person-body"></div>
                  </div>
                  <div
                    className="elevator-floor-indicator"
                    ref={elevatorIndicatorRef}
                  >
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll spacer to provide scroll distance */}
      <div style={{ height: "200vh", background: "transparent" }}></div>
    </>
  );
};

export default AboutUsBuildingComp;
