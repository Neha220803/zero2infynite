import React from "react";
import { Container, Row } from "react-bootstrap";
import "./availableInternship.css";

const ProgramFeaturesComp = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="mb-4">
          <h2 className="fw-bold mb-4"> Our Program Features</h2>
        </Row>
        <Row style={{ fontSize: "18px" }}>
          <ul className="">
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>
                <strong className="text-primary">Internship Duration:</strong> 1
                to 3 Months
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>
                <strong className="text-primary">Mode:</strong> Online / Offline
                / Hybrid
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>
                <strong className="text-primary">Eligibility:</strong>{" "}
                Final-year students, recent graduates, cybersecurity aspirants
              </span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>
                <strong className="text-primary">Tools Used:</strong> Kali
                Linux, Burp Suite, Splunk, Nessus, Wireshark, AWS, Azure, etc.
              </span>
            </li>
            <li className="mb-0 d-flex align-items-start">
              <span className="me-2">•</span>
              <span>
                <strong className="text-primary">Deliverables:</strong>{" "}
                Internship Certificate, Project Report, Recommendation Letter
                (based on performance)
              </span>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
};

export default ProgramFeaturesComp;
