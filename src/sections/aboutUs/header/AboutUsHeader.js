import React, { useState, useEffect } from "react";
import "./AboutUsHeader.css";
import { Container, Row, Col } from "react-bootstrap";

const AboutUsHeaderComp = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "Even if you start with nothing, our training helps you reach everything — that's Zero2infynite.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Stop cursor blinking after typing is complete
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 50); // Adjust speed here (lower = faster)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  return (
    <section className="about-us-header">
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col lg={10} xl={8} className="text-center">
            <h1 className="main-title mb-5">
              Our story, so far...{" "}
              <span className={`cursor ${showCursor ? "show" : "hide"}`}>
                |
              </span>
            </h1>
            <div className="typing-container">
              <p className="typing-text">{displayedText}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsHeaderComp;
