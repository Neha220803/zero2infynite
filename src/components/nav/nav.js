// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./nav.css";
import logo from "../../assets/icons/logo.svg";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the top bar's height to use as scroll threshold
      const topBarHeight =
        document.querySelector(".top-bar")?.clientHeight || 0;

      // Check if we've scrolled past the top bar
      if (window.scrollY > topBarHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar py-2">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="social-icons d-flex">
            <a href="https://www.instagram.com/zero2infynite/" className="me-3">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/Zero2Infynite/" className="me-3">
              <FaFacebookF />
            </a>
            <a href="#" className="me-3">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/zero2infynite/"
              className="me-3"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="contact-info d-flex">
            <a href="tel:+919087922334" className="me-4 text-decoration-none">
              <FaPhoneAlt className="me-1" /> +91 90879 22334
            </a>
            <a
              href="mailto:info@zero2infynite.com"
              className="text-decoration-none"
            >
              <MdEmail className="me-1" /> info@zero2infynite.com
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Zero2Infynite"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="/all-courses" className="nav-item">
                All Course
              </Nav.Link>
              <Nav.Link href="/internship" className="nav-item">
                Internship
              </Nav.Link>
              <Nav.Link href="/projects" className="nav-item">
                Projects
              </Nav.Link>
              <Nav.Link href="/services" className="nav-item">
                Services
              </Nav.Link>
              <Nav.Link href="/testimonial" className="nav-item">
                Testimonial
              </Nav.Link>
              <Nav.Link href="/about" className="nav-item">
                About Us
              </Nav.Link>
              <Nav.Link href="/blogs" className="nav-item">
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacer div to prevent content from being hidden under the navbar when scrolled */}
      {scrolled && <div className="navbar-spacer"></div>}
    </>
  );
};

export default MainNavbar;
