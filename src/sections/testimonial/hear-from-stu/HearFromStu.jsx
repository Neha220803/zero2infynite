import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./HearFromStu.css";

const HearFromStudentsComp = () => {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  const handlePlayVideo = (index) => {
    setPlayingVideo(index);
  };

  const testimonials = [
    {
      name: "Nithish",
      video: "How I Built My First App in 30 Days",
      description:
        "Join me as I document my journey building a full-stack web application from scratch. I'll show you the challenges I faced, the mistakes I made, and how I overcame them to create something amazing.",

      bgColor: "testimonial-card-red",
      youtubeId: "1K_UtWDyNTE",
      embedParams: "si=SOWmrskAfaB2BYab",
    },
    {
      name: "Nithya",
      video: "My Morning Routine That Changed Everything",
      description:
        "After struggling with productivity for years, I discovered this simple morning routine that completely transformed my life. In this video, I share the exact steps and science behind why it works.",
      bgColor: "testimonial-card-blue",
      youtubeId: "dQw4w9WgXcQ",
      embedParams: "si=ABC123XYZ789",
    },
    {
      name: "Sathya",
      video: "Testing Viral TikTok Life Hacks",
      description:
        "I spent 24 hours testing the most popular life hacks from TikTok to see which ones actually work. Some of these results will shock you! Make sure to watch till the end for the biggest surprise.",
      bgColor: "testimonial-card-brown",
      youtubeId: "9bZkp7q19f0",
      embedParams: "si=DEF456UVW012",
    },
  ];

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center py-5">
        <Row className="mb-5">
          <h2 className="text-secondary">Zero2infynite Training Reviews</h2>
          <p>
            Hear from our students about their experiences with Zero2infynite.
            You can find their testimonials below.
          </p>
        </Row>
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
