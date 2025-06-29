import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import icon1 from "../../assets/icons/about-us/Mask groupabout-icons.svg";
import icon2 from "../../assets/icons/about-us/mi_documentabout-icons.svg";
import icon3 from "../../assets/icons/about-us/hugeicons_elearning-exchangeabout-icons.svg";
import icon4 from "../../assets/icons/about-us/healthicons_i-training-classabout-icons.svg";
import icon5 from "../../assets/icons/about-us/fluent_person-support-16-filledabout-icons.svg";
import icon6 from "../../assets/icons/about-us/healthicons_i-training-class-24pxabout-icons.svg";
import "./AboutUsPerks.css";
const AboutUsPerks = () => {
  const perksData = [
    {
      icon: icon1,
      title: "Industry Best Trainers",
      description:
        "Faculty is our forte. Trainers at ExcelR possess extensive real time experiences, certified, have a passion for training and considered to be the best in the industry. Request for a free demo to assess the quality of our training.",
    },
    {
      icon: icon2,
      title: "Tailored course Curriculum",
      description:
        "Z2i's training curriculum is tailored according to the trending industry needs. Our curriculum is meticulously designed by top-notch experts and considered to be the best in the industry.",
    },
    {
      icon: icon3,
      title: "Access to E-Learning",
      description:
        "Participants will be given access to recorded sessions of their instructor and live classes which help reverse and recap the concepts and also to watch the missed sessions on ExcelR’s state of the art Learning Management System (LMS) one can access and watch the recorded sessions even on the move.",
    },
    {
      icon: icon4,
      title: "Blended Training Model",
      description:
        "Z2i offers a blend of classroom, Instructor-led online and E-learning which ensures a comprehensive learning experience for the learners enhancing the learning curve.",
    },
    {
      icon: icon5,
      title: "Post-Training Support",
      description:
        "Z2i offers extensive support even after the completion of the training through modes of interactive forums like Whatsapp, Forums and Social Media Platforms. One can reach out to the trainers for assistance to clarify their doubts.",
    },
    {
      icon: icon6,
      title: "Peer Support",
      description:
        "We ensure that past participants from ExcelR would help the current participants who are undergoing the training. They share their experiences and also provide guidance to fellow participants, which helps the participants with their preparation.",
    },
  ];

  return (
    <section className="">
      <Container>
        <Row>
          {perksData.map((perk, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="about-us-cards">
                <CardImg
                  className="about-us-cards-icons img-fluid"
                  src={perk.icon}
                />
                <CardBody className="p-0">
                  <CardTitle>{perk.title}</CardTitle>
                  <CardText>{perk.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsPerks;
