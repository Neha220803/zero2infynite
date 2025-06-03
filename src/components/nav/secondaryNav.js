import React, { useState, useEffect, useRef } from "react";
import { Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./secondaryNav.css";

function NavSecondary() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const navPositionRef = useRef(null);
  const location = useLocation();
  const primaryNavHeight = 88; // Matches top: 88px in your CSS for sticky-active
  const manualScrollRef = useRef(false);
  const ticking = useRef(false);

  // Setup Intersection Observer for scrollspy
  useEffect(() => {
    // Define all section IDs
    const sectionIds = [
      "overview",
      "batches",
      "syllabus",
      "trainer",
      "certifications",
      // "opportunity",
      "faq",
    ];

    // Function to determine which section is most visible
    const handleIntersection = (entries) => {
      // Skip if manual scrolling is in progress
      if (manualScrollRef.current) return;

      // Find the entry with the largest intersection ratio
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Sort by intersection ratio (largest first)
        const mostVisible = [...visibleEntries].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0];

        setActiveTab(mostVisible.target.id);
      }
    };

    // Create the observer with options
    const isMobile = window.innerWidth <= 768;
    const observerOptions = {
      root: null, // viewport
      rootMargin: isMobile
        ? `-${primaryNavHeight}px 0px -10% 0px` // More aggressive margin for mobile
        : `-${primaryNavHeight + 50}px 0px -50% 0px`, // Original desktop margin
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Keep all thresholds
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`Section with id "${id}" not found for scrollspy`);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array = run once on mount

  // Handle sticky nav and hash URL
  useEffect(() => {
    // Extract the active tab from URL hash if present
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    }

    // Store the initial position of the navbar
    if (navRef.current) {
      // Get position after everything has loaded
      setTimeout(() => {
        navPositionRef.current =
          navRef.current.getBoundingClientRect().top + window.scrollY;
      }, 100);
    }

    // Add scroll event listener to handle sticky behavior with requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;

        requestAnimationFrame(() => {
          if (!navPositionRef.current && navRef.current) {
            navPositionRef.current =
              navRef.current.getBoundingClientRect().top + window.scrollY;
          }

          if (navPositionRef.current) {
            // We want it to stick when the distance from the top of the document
            // to the navbar's original position is about to become less than the
            // height of the primary navbar
            const shouldBeSticky =
              window.scrollY > navPositionRef.current - primaryNavHeight;

            if (shouldBeSticky !== isSticky) {
              setIsSticky(shouldBeSticky);

              // When toggling sticky state, add a CSS class to body for spacing adjustments
              if (shouldBeSticky) {
                document.body.classList.add("has-sticky-nav");
              } else {
                document.body.classList.remove("has-sticky-nav");
              }
            }
          }

          ticking.current = false;
        });
      }
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("has-sticky-nav");
    };
  }, [location, isSticky]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Set manual scroll flag to prevent Intersection Observer from changing active tab
    manualScrollRef.current = true;

    // Find the section element and scroll to it
    const element = document.getElementById(tabName);
    if (element) {
      const isMobile = window.innerWidth <= 768;
      const yOffset = isMobile
        ? -(primaryNavHeight + 10) // Adjusted for mobile based on your CSS
        : -(primaryNavHeight + 50); // Desktop value
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        manualScrollRef.current = false;
      }, 1000); // 1 second should cover most scroll animations
    }

    // Update URL hash
    window.history.pushState(null, "", `#${tabName}`);
  };

  // Find the index of the active tab to scroll it into view on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const activeElement = document.querySelector(".sec-active");
      if (activeElement) {
        // Scroll the active tab into view in the navbar with a slight delay
        // to ensure the active class has been properly applied
        setTimeout(() => {
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }, 50);
      }
    }
  }, [activeTab]);

  return (
    <div
      ref={navRef}
      className={`secondary-nav-container ${isSticky ? "sticky-active" : ""}`}
      style={{
        willChange: "transform",
        transform: "translateZ(0)", // Force hardware acceleration
        backfaceVisibility: "hidden", // Reduce flickering
      }}
    >
      <Container>
        <Nav className="secondary-nav">
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "overview" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("overview")}
          >
            Course Overview
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "batches" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("batches")}
          >
            Upcoming Batches
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "syllabus" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("syllabus")}
          >
            Syllabus
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "trainer" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("trainer")}
          >
            Trainer Profile
          </Nav.Link>
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "certifications" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("certifications")}
          >
            Certifications
          </Nav.Link>
          {/* <Nav.Link
            className={`sec-nav-link ${activeTab === "opportunity" ? "sec-active" : ""
              }`}
            onClick={() => handleTabClick("opportunity")}
          >
            Opportunity
          </Nav.Link> */}
          <Nav.Link
            className={`sec-nav-link ${
              activeTab === "faq" ? "sec-active" : ""
            }`}
            onClick={() => handleTabClick("faq")}
          >
            FAQ
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
}

export default NavSecondary;
