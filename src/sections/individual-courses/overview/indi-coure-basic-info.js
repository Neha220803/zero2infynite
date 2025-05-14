import React from "react";
import { FaStar } from "react-icons/fa";
import courseicon1 from "../../../assets/icons/certifications/akar-icons_book.svg";
import courseicon2 from "../../../assets/icons/certifications/flowbite_profile-card-solid.svg";
import courseicon3 from "../../../assets/icons/certifications/fluent_certificate-20-regular.svg";
import courseicon4 from "../../../assets/icons/certifications/material-symbols_event-upcoming-outline-rounded.svg";
import courseicon5 from "../../../assets/icons/certifications/material-symbols_lab-profile.svg";
import courseicon6 from "../../../assets/icons/certifications/mdi_faq.svg";
import courseicon7 from "../../../assets/icons/certifications/whyz2i.svg";
import callerIcon from "../../../assets/icons/course/call.svg";
import courseImg from "../../../assets/images/employee-training.png";
import CertificationImg from "../../../assets/images/indi_course/certirfication.png";
import { Container, Row, Col, Card, CardImg, CardBody } from "react-bootstrap";
import "./indi-course-basic-info.css";

const IndiCoureBasicInfo = () => {
  return (
    <Container id="overview" className="indi-course-basic-info-container">
      <Row>
        <Col sm={12} xs={12} lg={8}>
          <div className="indi-course-left-wrap">
            <h1 className="indi-section-title">
              Certified Ethical Hacking Course in Chennai
            </h1>
            <div className="d-flex flex-md-row flex-column gap-3 mb-4">
              <div className="best-seller-button">Very Famous</div>
              <div className="course-rating">
                <div className="d-flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="stars" />
                  ))}
                </div>
                <div className="reviews d-flex">Top Rating | Read Reviews</div>
              </div>
            </div>
            <p className="indi-course-description">
              Are you looking for an{" "}
              <strong style={{ fontSize: "18px" }}>
                affordable Certified Ethical Hacking course
              </strong>{" "}
              or international certifications such as EC-Council or CompTIA to{" "}
              <strong style={{ fontSize: "18px" }}>
                secure a job, boost your salary, or advance your career in the
                cybersecurity domain?
              </strong>{" "}
              Or are you simply seeking practical, knowledge-based training to
              protect yourself in the digital world?
            </p>
            <p className="indi-course-description text-primary pointer">
              <a
                style={{ color: "#012356", cursor: "pointer" }}
                href="https://drive.google.com/file/d/1XrmWRk7hLaWaKvorNmpChxPRMZ33XHfL/view?usp=sharing"
              >
                Click here to download the CEH brochure and syllabus
              </a>
            </p>
            <p className="indi-course-description">
              Zero2Infynite is here to{" "}
              <strong style={{ fontSize: "18px" }}>
                help you achieve your goals.
              </strong>{" "}
              We evaluate each student’s unique needs and provide personalized
              guidance. Unlike typical institutes that stop at training,{" "}
              <strong style={{ fontSize: "18px" }}>
                we offer continuous support until you reach your goals.
              </strong>{" "}
              We are an{" "}
              <strong style={{ fontSize: "18px" }}>
                authorized EC-Council Accredited Training Center (ATC) partner.
              </strong>
            </p>
            <p className="indi-course-description">
              We take pride in our{" "}
              <strong style={{ fontSize: "18px" }}>100% pass rate </strong>for
              international certifications - something you may not get if you
              purchase courses directly or through other providers.{" "}
            </p>
            <p className="indi-course-description">
              Our trainers bring{" "}
              <strong style={{ fontSize: "18px" }}>
                real-world industry experience and also assist with job
                referrals.
              </strong>{" "}
              They have designed cybersecurity course syllabi for prestigious
              institutions such as SRM Valliammai Engineering College, St.
              Joseph’s College, and others. We also hold MOUs with top colleges
              including VIT Chennai, St. Joseph’s, SRM, and VELS University.{" "}
            </p>{" "}
            <p className="indi-course-description">
              We have successfully{" "}
              <strong style={{ fontSize: "18px" }}>
                placed the majority of our students in the cybersecurity field.{" "}
              </strong>
              Additionally, we’ve{" "}
              <strong style={{ fontSize: "18px" }}>
                {" "}
                helped experienced professionals transition into cybersecurity
              </strong>{" "}
              by carefully assessing and building on their existing skills.
              We've also supported working cybersecurity professionals in
              earning international certifications to boost their skills,
              salaries, and career positions.
            </p>
            <div className="course-details">
              <Row>
                <Col sm={4}>
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                    className="indi-course-facts"
                  >
                    <li>
                      <img src={courseicon5} alt="Course Description" />
                      <p>Real time industry oriented training</p>
                    </li>
                    <li>
                      <img src={courseicon4} alt="Upcoming batches" />
                      <p> Updated syllabus</p>
                    </li>
                    <li>
                      <img src={courseicon1} alt="Course curriculum" />
                      <p> Flexible Learning Modes</p>
                    </li>
                  </ul>
                </Col>
                <Col sm={4}>
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                    className="indi-course-facts"
                  >
                    <li>
                      <p>100% Success Rate </p>
                    </li>
                    <li>
                      <img src={courseicon2} alt="Trainer Profile" />
                      <p> Career Assistance & Job Referrals</p>
                    </li>
                    <li>
                      <p>Hands-On Practical Training</p>
                    </li>
                  </ul>
                </Col>
                <Col sm={4}>
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                    className="indi-course-facts"
                  >
                    <li>
                      <img src={courseicon3} alt="Testimonials" />
                      <p> Free Demo sessions</p>
                    </li>
                    <li>
                      <img src={courseicon7} alt="Testimonials" />
                      <p>Training that fits your budget</p>
                    </li>
                    <li>
                      <img src={courseicon6} alt="FAQs" />
                      <p> International Certification Preparation</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <Row>
              <p className="indi-course-description">
                Certified Ethical Hacking (CEH) from Zero2infynite offers
                Ec-Council and Comptia Certification which will help to enter
                into the cyber security domain. We are an authorized training
                centre of Ec-council. The total cost of Ec-council certification
                with training is 34000. You can also attend training for 17000.
                Later you can pay the remaining amount and get the International
                certification. This Certified Ethical Hacking course will help
                you to enter in to all the cyber security domain like
              </p>
              <p className="indi-course-description">
                <ol>
                  <li>Cyber Security</li>
                  <li>Auditing Vulnerability and penetration Testing </li>
                  <li>SOC analyst</li>
                  <li>Cloud security</li>
                  <li>Malware analyst </li>
                  <li> Cyber forensic expert </li>
                  <li> IARM expert</li>
                </ol>
              </p>
              <p className="indi-course-description">
                We will explain how each topic will help to gain knowledge in
                specific domains along with realtime examples. Our Trainers
                trained Cyber crime officers from various states, managers in IT
                industry, College and school students.
              </p>
            </Row>
          </div>
        </Col>
        <Col sm={12} xs={12} lg={4} className="p-0">
          <Card className="indi-course-right-card">
            <CardImg src={CertificationImg} alt="course img" />
            <CardBody className="py-0">
              <div>
                <div className="d-flex gap-3 ">
                  <div className="best-seller-grey-button w-40">Enroll Now</div>
                  <div className="best-seller-button w-60">
                    Get Free Live Videos
                  </div>
                </div>
                <div className="py-3">
                  <div className="d-flex flex-column">
                    <div className="indi-course-description text-center">
                      Have Queries? Ask our Experts
                    </div>
                    <div
                      className="d-flex justify-content-center mx-auto align-items-center call-us-bg-course mt-3"
                      onClick={() =>
                        (window.location.href = "tel:+918111000953")
                      }
                    >
                      <div>
                        <img
                          src={callerIcon}
                          alt="caller Icon"
                          className="me-3"
                          style={{ width: "40px", height: "auto" }}
                        />
                      </div>
                      <div>
                        <div className="indi-number text-start">
                          + 91 81110 00953
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IndiCoureBasicInfo;
