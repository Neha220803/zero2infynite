// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./nav.css";
import logo from "../../assets/icons/logo.svg"; // Make sure this path is correct

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Function to check scroll position
  const checkScroll = () => {
    const topBarHeight = document.querySelector(".top-bar")?.clientHeight || 0;
    if (window.scrollY > topBarHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("scroll", checkScroll);

    // Initial check
    checkScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Re-check scroll position when location changes
  useEffect(() => {
    // Check immediately after navigation
    checkScroll();

    // And check again after a short delay to handle any layout shifts
    const timer = setTimeout(() => {
      checkScroll();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleNavigation = (path, e) => {
    e.preventDefault(); // Prevent default link behavior

    if (expanded) {
      setExpanded(false); // Close mobile menu if open
    }

    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top immediately
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar py-2">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="social-icons d-flex">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="contact-info d-flex">
            <a href="tel:+919087924334" className="me-4 text-decoration-none">
              <FaPhoneAlt className="me-1" /> +91 90879 24334
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
        expanded={expanded}
        onToggle={setExpanded}
        className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand
            as="a"
            href="/"
            onClick={(e) => handleNavigation("/", e)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo} // Make sure your logo is imported correctly
              alt="Zero2Infynite"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={location.pathname}>
              <Nav.Link
                href="/"
                className="nav-item"
                active={location.pathname === "/"}
                onClick={(e) => handleNavigation("/", e)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/all-courses"
                className="nav-item"
                active={location.pathname === "/all-courses"}
                onClick={(e) => handleNavigation("/all-courses", e)}
              >
                All Course
              </Nav.Link>
              <Nav.Link
                href="/internship"
                className="nav-item"
                active={location.pathname === "/internship"}
                onClick={(e) => handleNavigation("/internship", e)}
              >
                Internship
              </Nav.Link>
              <Nav.Link
                href="/projects"
                className="nav-item"
                active={location.pathname === "/projects"}
                onClick={(e) => handleNavigation("/projects", e)}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="/services"
                className="nav-item"
                active={location.pathname === "/services"}
                onClick={(e) => handleNavigation("/services", e)}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/testimonial"
                className="nav-item"
                active={location.pathname === "/testimonial"}
                onClick={(e) => handleNavigation("/testimonial", e)}
              >
                Testimonial
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="nav-item"
                active={location.pathname === "/about"}
                onClick={(e) => handleNavigation("/about", e)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/blogs"
                className="nav-item"
                active={location.pathname === "/blogs"}
                onClick={(e) => handleNavigation("/blogs", e)}
              >
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
