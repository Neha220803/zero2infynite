import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import "./availableInternship.css";

const CyberInternshipComp = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4">
          <div className="col-12">
            <h2 className="text-center mb-4 fw-bold">
              Cybersecurity <span className="text-primary">Internship</span>{" "}
              Program Overview
            </h2>
            <p
              className="text-muted text-center mx-auto"
              style={{ maxWidth: "900px" }}
            >
              Kickstart your career in cybersecurity with our immersive
              internship program at Zero2Infynite. This hands-on training is
              crafted to expose students and enthusiasts to real-world tools,
              methodologies, and cybersecurity domains across both offensive and
              defensive security operations. Choose any one from following
              domains for cyber security internship.
            </p>
          </div>
        </Row>

        <Row>
          <div className="col-12">
            <Accordion defaultActiveKey="0" className="shadow-sm">
              <Accordion.Item eventKey="0" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">1. Security Auditing</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      <strong>ISO 27001</strong> – Implementation & Lead Auditor
                      concepts
                    </li>
                    <li className="mb-2">
                      <strong>PCI-DSS</strong> – Payment card industry data
                      security standard
                    </li>
                    <li className="mb-2">
                      <strong>HIPAA</strong> – Healthcare information security
                      compliance
                    </li>
                    <li className="mb-0">
                      <strong>GRC</strong> – Governance, Risk, and Compliance
                      fundamentals
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">
                    2. Vulnerability Assessment & Penetration Testing (VA/PT)
                  </span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <div className="mb-3">
                    <strong className="d-block mb-2">
                      Tools & Techniques:
                    </strong>
                    <ul className=" ms-3">
                      <li className="mb-1">
                        Nessus – Automated vulnerability scanning
                      </li>
                      <li className="mb-1">
                        Nipper Studio – Network device configuration auditing
                      </li>
                      <li className="mb-1">
                        Acunetix / OpenVAS – Web application vulnerability
                        scanning
                      </li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong className="d-block mb-2">Domains Covered:</strong>
                    <ul className=" ms-3">
                      <li className="mb-1">Web Applications</li>
                      <li className="mb-1">Mobile Applications</li>
                      <li className="mb-1">APIs</li>
                      <li className="mb-1">Thick Clients</li>
                      <li className="mb-1">Network Infrastructure</li>
                      <li className="mb-1">Cloud Environments</li>
                      <li className="mb-1">IoT Devices</li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong className="d-block mb-2">Approaches:</strong>
                    <ul className=" ms-3">
                      <li className="mb-1">
                        DAST – Dynamic Application Security Testing
                      </li>
                      <li className="mb-1">
                        SAST – Static Application Security Testing (Java, .NET)
                      </li>
                    </ul>
                  </div>

                  <div className="mb-3">
                    <strong className="d-block mb-2">
                      OWASP Top 10 Web Vulnerabilities:
                    </strong>
                    <ul className=" ms-3">
                      <li className="mb-1">Injection</li>
                      <li className="mb-1">Broken Authentication</li>
                      <li className="mb-1">Sensitive Data Exposure</li>
                      <li className="mb-1">XML External Entities (XXE)</li>
                      <li className="mb-1">Broken Access Control</li>
                      <li className="mb-1">Security Misconfigurations</li>
                      <li className="mb-1">Cross-Site Scripting (XSS)</li>
                      <li className="mb-1">Insecure Deserialization</li>
                      <li className="mb-1">
                        Using Components with Known Vulnerabilities
                      </li>
                      <li className="mb-1">
                        Insufficient Logging & Monitoring
                      </li>
                    </ul>
                    <p className="text-muted mt-2 mb-0">
                      Includes: Definitions, Practical Demonstrations, Impacts,
                      Mitigations, and Vulnerability Types
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">3. Red Teaming</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      Performing full-scope attacks on environments
                    </li>
                    <li className="mb-2">
                      Targeting systems, endpoints, and networks
                    </li>
                    <li className="mb-0">
                      Gaining insights into offensive techniques used by
                      real-world adversaries
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">4. Cloud Security</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      Penetration Testing of cloud-hosted applications and
                      infrastructures (AWS, Azure, GCP)
                    </li>
                    <li className="mb-0">
                      Cloud Configuration Auditing and secure DevOps practices
                      (IaC, CI/CD security)
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">5. SOC Analyst Training</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      SIEM Tools: Splunk, QRadar, ArcSight
                    </li>
                    <li className="mb-2">
                      Monitoring Tools: Nagios, Wireshark
                    </li>
                    <li className="mb-2">
                      Log collection, correlation, and threat detection
                    </li>
                    <li className="mb-0">
                      Understand incident escalation and SOC L1/L2
                      responsibilities
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">6. Threat Hunting</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      Use frameworks like MITRE ATT&CK to identify threats
                    </li>
                    <li className="mb-2">
                      Conduct Open Source Intelligence (OSINT) gathering
                    </li>
                    <li className="mb-0">
                      Detect abnormal behaviors and patterns
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">7. Cyber Forensics</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      Disk, memory, email, mobile, and network forensics
                    </li>
                    <li className="mb-0">
                      Preserve evidence and support legal proceedings
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7" className="">
                <Accordion.Header className="bg-light">
                  <span className="fw-semibold">8. Malware Analysis</span>
                </Accordion.Header>
                <Accordion.Body className="bg-white p-4">
                  <ul className=" mb-0">
                    <li className="mb-2">
                      Collect and reverse engineer malware samples
                    </li>
                    <li className="mb-2">
                      Analyze malware behavior and patterns
                    </li>
                    <li className="mb-2">Develop detection signatures</li>
                    <li className="mb-0">
                      Understand static and dynamic malware analysis
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CyberInternshipComp;
