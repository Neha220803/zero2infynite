import React, { useState } from "react";
import "./AboutUsBuildingComp.css";
import { Container, Row, Modal, Button } from "react-bootstrap";
import book1 from "../../../assets/images/about-us/book1.png";
import book2 from "../../../assets/images/about-us/book2.png";
import book3 from "../../../assets/images/about-us/book3.png";
import book4 from "../../../assets/images/about-us/book4.png";
import book5 from "../../../assets/images/about-us/book5.png";
import book6 from "../../../assets/images/about-us/book6.png";
import book7 from "../../../assets/images/about-us/book7.png";

const AboutUsBuildingComp = () => {
  // Modal state
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Handle modal open/close
  const handleClose = () => setShow(false);
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  // Sample data for the books - replace with your actual book images
  const books = [
    {
      id: 1,
      image: book1, // Replace with your image paths
      alt: "Hands-On Practical Training",
      title: "Hands-On Practical Training",
      description:
        "Learn by doing with our comprehensive hands-on approach. Work on real projects and gain practical experience that employers value. Our training methodology ensures you develop both theoretical knowledge and practical skills.",
      hoverColor: "#87CEEB", // Light blue
    },
    {
      id: 2,
      image: book2,
      alt: "Job-Oriented Training",
      title: "Job-Oriented Training",
      description:
        "Our curriculum is designed specifically to meet industry demands. Learn the exact skills that employers are looking for and increase your chances of landing your dream job in the tech industry.",
      hoverColor: "#FFB347", // Light orange
    },
    {
      id: 3,
      image: book3,
      alt: "Training cost that fits your budget",
      title: "Affordable Training Programs",
      description:
        "Quality education shouldn't break the bank. We offer flexible payment options and competitive pricing to make professional training accessible to everyone, regardless of their financial situation.",
      hoverColor: "#98FB98", // Light green
    },
    {
      id: 4,
      image: book4,
      alt: "Career Assistance & Job Referrals",
      title: "Career Support & Job Placement",
      description:
        "Our commitment doesn't end when you complete the course. We provide comprehensive career assistance, resume building, interview preparation, and direct job referrals to our partner companies.",
      hoverColor: "#DDA0DD", // Plum
    },
    {
      id: 5,
      image: book5,
      alt: "Flexible Learning Modes",
      title: "Flexible Learning Options",
      description:
        "Choose from multiple learning formats that fit your schedule. Whether you prefer online classes, weekend batches, or evening sessions, we have options that work with your lifestyle and commitments.",
      hoverColor: "#F0E68C", // Khaki
    },
    {
      id: 6,
      image: book6,
      alt: "Updated syllabus",
      title: "Current & Updated Curriculum",
      description:
        "Stay ahead with our regularly updated syllabus that reflects the latest industry trends and technologies. Learn the most current tools, frameworks, and best practices used by leading companies today.",
      hoverColor: "#FFB6C1", // Light pink
    },
    {
      id: 7,
      image: book7,
      alt: "Real time industry oriented training",
      title: "Industry-Focused Real-Time Training",
      description:
        "Bridge the gap between academic learning and industry requirements. Our training is designed by industry experts and includes real-world scenarios, case studies, and current market practices.",
      hoverColor: "#B0E0E6", // Powder blue
    },
  ];

  return (
    <section className="about-us-section">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Row className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
          <h2>About Us</h2>
          <p>We are a company dedicated to building innovative solutions.</p>
        </Row>

        {/* Book Stack Container */}
        <Row className="book-stack-container">
          <div className="books-wrapper">
            {books.map((book, index) => (
              <div
                key={book.id}
                className={`book-item book-${index + 1}`}
                style={{ "--hover-color": book.hoverColor }}
                onClick={() => handleBookClick(book)}
              >
                <img src={book.image} alt={book.alt} className="book-image" />
              </div>
            ))}
          </div>
        </Row>

        {/* Modal for Book Details */}
        <Modal
          show={show}
          onHide={handleClose}
          centered
          size="lg"
          className="book-modal"
        >
          <Modal.Header
            closeButton
            style={{
              backgroundColor: selectedBook?.hoverColor,
              color: "white",
            }}
          >
            <Modal.Title>{selectedBook?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div className="d-flex flex-column flex-md-row align-items-center">
              {/* <div className="mb-3 mb-md-0 me-md-4">
                <img
                  src={selectedBook?.image}
                  alt={selectedBook?.alt}
                  className="modal-book-image"
                  style={{ maxWidth: "200px", height: "auto" }}
                />  
              </div> */}
              <div className="flex-grow-1">
                <p className="lead">{selectedBook?.description}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{
                backgroundColor: selectedBook?.hoverColor,
                borderColor: selectedBook?.hoverColor,
              }}
            >
              Learn More
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default AboutUsBuildingComp;
