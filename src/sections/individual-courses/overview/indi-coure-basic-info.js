import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import callerIcon from "../../../assets/icons/course/call.svg";
import CertificationImg from "../../../assets/images/indi_course/certirfication.png";
import { Container, Row, Col, Card, CardImg, CardBody } from "react-bootstrap";
import "./indi-course-basic-info.css";
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
import IndiCoursePopUPFormComp from "../form/IndiCoursePopUPForm";
import { ecCouncilCourses } from "../../../data/ecCounsilCourses";
import { compTIACourses } from "../../../data/compTIACourses";
import { isacaCourses } from "../../../data/isacaCourses";

const IndiCourseBasicInfo = ({ courseType }) => {
  const [modalShow, setModalShow] = useState(false);

  // Get course data based on courseType prop
  const courseData =
    ecCouncilCourses[courseType] ||
    compTIACourses[courseType] ||
    isacaCourses[courseType];

  // Icon mapping for dynamic rendering
  const iconMap = {
    GiTeacher,
    BookHalf,
    Calendar2Check,
    Award,
    BriefcaseFill,
    Tools,
    SiGoogleclassroom,
    CurrencyDollar,
    PiCertificate,
  };

  // Helper function to render text with highlights
  const renderTextWithHighlights = (text, highlights = []) => {
    let processedText = text;

    highlights.forEach((highlight) => {
      const regex = new RegExp(
        `(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      processedText = processedText.replace(
        regex,
        '<span class="para-highlight">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  // Helper function to chunk features into groups of 3
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const featureChunks = chunkArray(courseData.features, 3);

  return (
    <div>
      <Container
        id="overview"
        className="indi-course-basic-info-container mt-md-3"
      >
        <Row>
          <Col sm={12} xs={12} lg={8}>
            <div className="indi-course-left-wrap">
              <h1 className="indi-section-title">{courseData.title}</h1>

              <div className="d-flex flex-md-row flex-column gap-3 mb-4">
                <div className="best-seller-button">{courseData.badge}</div>
                <div className="course-rating">
                  <div className="bg-primar d-flex align-items-center justify-content-center">
                    {[...Array(courseData.rating.stars)].map((_, index) => (
                      <FaStar key={index} className="stars" />
                    ))}
                  </div>
                  <div className="reviews d-flex">{courseData.rating.text}</div>
                </div>
              </div>

              <p className="indi-course-description">
                {renderTextWithHighlights(
                  courseData.description.intro,
                  courseData.highlights
                )}
              </p>

              <p className="indi-course-description text-primary pointer">
                <a
                  style={{ color: "#012356", cursor: "pointer" }}
                  href={courseData.description.brochureLink.url}
                >
                  {courseData.description.brochureLink.text}
                </a>
              </p>

              {courseData.description.aboutUs.map((paragraph, index) => (
                <p key={index} className="indi-course-description">
                  {renderTextWithHighlights(paragraph, courseData.highlights)}
                </p>
              ))}
            </div>
          </Col>

          <Col sm={12} xs={12} lg={4} className="mb-4">
            <Card className="indi-course-right-card">
              <CardImg src={CertificationImg} alt="course img" />
              <CardBody className="py-0">
                <div>
                  <div className="d-flex gap-3 ">
                    <button
                      className="best-seller-grey-button w-40 border-0"
                      onClick={() => setModalShow(true)}
                    >
                      Enroll Now
                    </button>
                    <button
                      className="best-seller-button w-60 border-0"
                      onClick={() => setModalShow(true)}
                    >
                      Get Free Live Videos
                    </button>
                  </div>
                  <div className="py-3">
                    <div className="d-flex flex-column">
                      <div className="indi-course-description text-center">
                        Have Queries? Ask our Experts
                      </div>
                      <div
                        className="d-flex justify-content-center mx-auto align-items-center call-us-bg-course mt-3"
                        onClick={() =>
                          (window.location.href = `tel:${courseData.contact.phone}`)
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
                            {courseData.contact.phoneFormatted}
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

        <Row className="py-5">
          <div className="course-details">
            {featureChunks.map((chunk, chunkIndex) => (
              <Row key={chunkIndex}>
                {chunk.map((feature, featureIndex) => {
                  const IconComponent = iconMap[feature.icon];
                  return (
                    <Col sm={4} key={featureIndex}>
                      <ul
                        style={{ listStyle: "none", padding: 0 }}
                        className="indi-course-facts"
                      >
                        <li className="">
                          <IconComponent
                            size={24}
                            className={`course-details-li-img ${
                              feature.color.startsWith("text-")
                                ? feature.color
                                : ""
                            }`}
                            style={
                              !feature.color.startsWith("text-")
                                ? { color: feature.color }
                                : {}
                            }
                          />
                          <p className="mb-0 feature-text">{feature.text}</p>
                        </li>
                      </ul>
                    </Col>
                  );
                })}
              </Row>
            ))}
            <Row>
              <h3 className="text-secondary fw-bolder mt-md-4 mt-2">
                {courseData.additionalInfoHeading}
              </h3>
              {courseData.additionalInfoSubHeading && (
                <h5 className="text-primary mt-2 fw-bold">
                  {courseData.additionalInfoSubHeading}
                </h5>
              )}
              <p className="indi-course-description">
                {courseData.additionalInfo}
              </p>
              {courseData.pricing && (
                <p className="indi-course-description">
                  {courseData.pricing.description}
                </p>
              )}
              {courseData.careerPaths && (
                <p className="indi-course-description">
                  <ol>
                    {courseData.careerPaths.map((path, index) => (
                      <li key={index}>{path}</li>
                    ))}
                  </ol>
                </p>
              )}
              {courseData.bellowcareerPaths && (
                <p className="indi-course-description">
                  {courseData.bellowcareerPaths}
                </p>
              )}
            </Row>
          </div>
        </Row>
      </Container>

      <IndiCoursePopUPFormComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default IndiCourseBasicInfo;
