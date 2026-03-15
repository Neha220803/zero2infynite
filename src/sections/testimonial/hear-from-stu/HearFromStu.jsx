import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./HearFromStu.css";

const HearFromStudentsComp = () => {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  const testimonials = [
    {
      name: "Nithish",
      video: "Student Success Story",
      description:
        "A cybersecurity professional from K7 Computing shares their honest feedback after completing our Cyber Security Training Program. Coming from an established cybersecurity organization, this testimonial highlights the practical depth, real-time attack simulations, and advanced lab exposure provided during the training.",
      bgColor: "testimonial-card-red",
      youtubeId: "5OlymlkPLIw",
      embedParams: "si=zKaZ-WV82ryQzSYD",
    },
    {
      name: "Ganesh",
      video: "My Learning Journey",
      description:
        "Ganesh shares his genuine experience after completing our Cyber Security Training Program. He talks about the practical lab sessions, real-time attack simulations, and how the training helped him build strong technical skills in ethical hacking and security testing.",
      bgColor: "testimonial-card-blue",
      youtubeId: "q7Tj2KbY_cY",
      embedParams: "si=qDa8T5NAaO_Jj9KO",
    },
    {
      name: "Vignesh",
      video: "Cyber Security Learning Experience",
      description:
        "Worked as a NOC (Network Operations Center) Analyst, shares his honest experience after completing our Cyber Security Training Program. Coming from a networking and monitoring background, Vignesh explains how this training helped him expand his skills beyond network monitoring into penetration testing, vulnerability assessment, and advanced security concepts.",
      bgColor: "testimonial-card-brown",
      youtubeId: "BymDqodszS0",
      embedParams: "si=zSKN4lMJFE4FWfya",
    },
    {
      name: "Sathya",
      video: "Cyber Security Course Review",
      description:
        "Our student shares their genuine experience after completing our Cyber Security Training Program. From hands-on labs to real-time attack simulations, this course is designed to build practical skills required in today’s cybersecurity industry.",
      bgColor: "testimonial-card-blue",
      youtubeId: "OUOxaX1MX5Q",
      embedParams: "si=UEbVsdI9sIdhaB0J",
    },
    {
      name: "Yamini Bala",
      video: "From Beginner to Cyber Security Professional",
      description:
        "Yamini Bala shares her genuine experience after completing our Cyber Security Training Program. She talks about the structured learning approach, hands-on lab sessions, and real-time cyber attack simulations that helped her build strong technical confidence.",
      bgColor: "testimonial-card-brown",
      youtubeId: "9V1XoHygDNk",
      embedParams: "si=yvd9Z9pi9xDuRsx5",
    },
    {
      name: "Stalin",
      video: "Student CEH Practical Cleared",
      description:
        "Stalin, a working SOC Analyst, shares his genuine experience after successfully completing the CEH Practical Examination from Zero2infynite. He talks about the comprehensive training, hands-on labs, and real-time attack simulations that helped him build strong technical skills.",
      bgColor: "testimonial-card-red",
      youtubeId: "hp4zoXZjVgs",
      embedParams: "si=VqViYKO8f6Nor5VV",
    },
  ];

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center py-5">
        <Row>
          <h1 className="hear-from-stu-heading">Hear it From Our Students</h1>
        </Row>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <Card className={`testimonial-card ${testimonial.bgColor}`}>
                <div className="video-section">
                  {playingVideo === index ? (
                    <div className="youtube-embed">
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${testimonial.youtubeId}?${testimonial.embedParams}&autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <div
                        className="video-thumbnail"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${testimonial.youtubeId}/maxresdefault.jpg`}
                          alt={testimonial.video}
                          className="thumbnail-img"
                        />
                        <div className="play-button">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M8 5v14l11-7z" fill="white" />
                          </svg>
                        </div>
                      </div>
                      <div className="video-overlay">
                        <h3 className="video-title">{testimonial.video}</h3>
                      </div>
                    </>
                  )}
                </div>
                <Card.Body className="testimonial-content">
                  <h4 className="student-name text-black">
                    {testimonial.name}
                  </h4>
                  <p className="testimonial-text">{testimonial.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HearFromStudentsComp;
