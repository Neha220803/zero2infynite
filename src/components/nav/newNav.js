import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/eddited logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./nav.css";

const SimpleNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Safely get top bar height with fallback
      let topBarElement = document.querySelector(".top-bar");
      let topBarHeight = topBarElement ? topBarElement.offsetHeight : 50;

      if (window.scrollY > topBarHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Add a small delay for initial check to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigation = (path) => {
    setExpanded(false); // Close navbar when navigation happens
    navigate(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className="py-2 top-bar d-none d-md-flex"
        // style={{ backgroundColor: "#333333", color: "white" }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <div className="">
            <a href="#" className="me-3 text-white">
              <FaInstagram />
            </a>
            <a href="#" className="me-3 text-white">
              <FaFacebookF />
            </a>
            {/* <a href="#" className="me-3 text-white">
              <FaXTwitter />
            </a> */}
            <a href="#" className="me-3 text-white">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="d-flex">
            <a
              href="tel:+919087924334"
              className="me-4 text-decoration-none text-white d-none d-md-flex"
            >
              <FaPhoneAlt className="me-1" /> +91 81110 00953
            </a>
            <a
              href="mailto:pradhan@zero2infynite.com"
              className="text-decoration-none text-white"
            >
              <MdEmail className="me-1" /> pradhan@zero2infynite.com
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
        // bg="dark"
        // variant="dark"
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className={`main-navbar py-2 ${
          scrolled ? "position-fixed w-100 top-0" : ""
        }`}
        style={{ zIndex: 1030 }}
      >
        <Container>
          <Navbar.Brand
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="Zero2Infynite"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => handleNavigation("/")}
                className="nav-item"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/all-courses")}
                className="nav-item"
              >
                All Course
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/internship")}
                className="nav-item"
              >
                Internship
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/projects")}
                className="nav-item"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/services")}
                className="nav-item"
              >
                Services
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/testimonial")}
                className="nav-item"
              >
                Testimonial
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/about")}
                className="nav-item"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigation("/blogs")}
                className="nav-item"
              >
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {scrolled && <div style={{ height: "56px" }}></div>}
    </>
  );
};

export default SimpleNavbar;
