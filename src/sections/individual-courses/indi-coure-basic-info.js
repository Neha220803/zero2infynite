import React from "react";
import { FaStar } from "react-icons/fa";
import courseicon1 from "../../assets/icons/certifications/akar-icons_book.svg";
import courseicon2 from "../../assets/icons/certifications/flowbite_profile-card-solid.svg";
import courseicon3 from "../../assets/icons/certifications/fluent_certificate-20-regular.svg";
import courseicon4 from "../../assets/icons/certifications/material-symbols_event-upcoming-outline-rounded.svg";
import courseicon5 from "../../assets/icons/certifications/material-symbols_lab-profile.svg";
import courseicon6 from "../../assets/icons/certifications/mdi_faq.svg";
import courseicon7 from "../../assets/icons/certifications/whyz2i.svg";
import callerIcon from "../../assets/icons/course/call.svg";
import courseImg from "../../assets/images/employee-training.png";
import { Container, Row, Col, Card, CardImg, CardBody } from "react-bootstrap";
import "./indi-course-basic-info.css";

const IndiCoureBasicInfo = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} xs={12} lg={8}>
          <div className="indi-course-left-wrap">
            <h1 className="indi-section-title">Certified Ethical Hacker</h1>
            <div className="d-flex gap-3">
              <div className="best-seller-button">Best Seller</div>
              <div className="course-rating">
                <div className="d-flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="stars" />
                  ))}
                </div>
                <div className="reviews d-flex">5789 Rating | Read Reviews</div>
              </div>
            </div>
            <p className="indi-course-description">
              Learn to be a Certified ethical Hacking from Beginner level to
              advanced techniques which is taught by experienced working
              professionals with out Certified Ethical Hacking Training in
              Chennai, You'll learn concepts in expert level with practical
              manner.
            </p>
            <div className="course-details">
              <Row>
                <Col sm={6}>
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                    className="indi-course-facts"
                  >
                    <li>
                      <img src={courseicon5} alt="Course Description" />
                      <p>Course Description</p>
                    </li>
                    <li>
                      <img src={courseicon4} alt="Upcoming batches" />
                      <p> Upcoming batches</p>
                    </li>
                    <li>
                      <img src={courseicon1} alt="Course curriculum" />
                      <p> Course curriculum</p>
                    </li>
                    <li>
                      <img src={courseicon2} alt="Trainer Profile" />
                      <p> Trainer Profile</p>
                    </li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul
                    style={{ listStyle: "none", padding: 0 }}
                    className="indi-course-facts"
                  >
                    <li>
                      <img src={courseicon3} alt="Testimonials" />
                      <p> Testimonials</p>
                    </li>
                    <li>
                      <img src={courseicon7} alt="Testimonials" />
                      <p>Why zero2infynite</p>
                    </li>
                    <li>
                      <img src={courseicon6} alt="FAQs" />
                      <p> FAQs</p>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col sm={12} xs={12} lg={4} className="p-0">
          <Card className="indi-course-right-card">
            <CardImg src={courseImg} alt="course img" />
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
                    <div className="d-flex justify-content-center mx-auto align-items-center">
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
                          + 91 96000 46662
                        </div>
                        <div className="indi-course-description">
                          Available 24x7 for your queries
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
