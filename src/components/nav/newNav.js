import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/eddited logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./nav.css";
import { IoMdArrowDropdown } from "react-icons/io";
import IndiCoursePopUPFormComp from "../../sections/individual-courses/form/IndiCoursePopUPForm";

const SimpleNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [modalShow, setModalShow] = useState(false);
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      // Reset dropdowns when switching between mobile/desktop
      if (window.innerWidth >= 992) {
        setOpenDropdowns({});
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Add a small delay for initial check to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigation = (path) => {
    setExpanded(false); // Close navbar when navigation happens
    setOpenDropdowns({}); // Reset dropdowns

    // If clicking logo on home page, scroll to top instead of navigating
    if (path === "/" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const toggleDropdown = (dropdownKey) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownKey]: !prev[dropdownKey],
    }));
  };

  const handleDropdownClick = (path, dropdownKey, hasChildren = true) => {
    if (isMobile && hasChildren) {
      // On mobile: toggle dropdown first, navigate on second click if already open
      if (openDropdowns[dropdownKey]) {
        handleNavigation(path);
      } else {
        toggleDropdown(dropdownKey);
      }
    } else {
      // On desktop or items without children: navigate immediately
      handleNavigation(path);
    }
  };

  const renderDesktopDropdown = () => (
    <div className="nav-dropdown-wrapper">
      <div className="desktop-dropdown">
        <button
          className="dropdown-toggle-btn"
          onClick={() => handleNavigation("/all-courses")}
        >
          All Courses <IoMdArrowDropdown />
        </button>
        <div className="desktop-dropdown-menu">
          {/* EC-Council Courses */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/ec-council")}
            >
              <span>EC-Council Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a
                onClick={() =>
                  handleNavigation("/ethical-hacking-training-in-chennai")
                }
              >
                CEH - Certified Ethical Hacker
              </a>
              <a onClick={() => handleNavigation("/ec-council/cpent")}>
                CPENT - Certified Penetration Tester
              </a>
              <a onClick={() => handleNavigation("/ec-council/chfi")}>
                CHFI - Computer Hacking Forensic Investigator
              </a>
              <a onClick={() => handleNavigation("/ec-council/cnd")}>
                CND - Computer Network Defender
              </a>
              <a onClick={() => handleNavigation("/ec-council/ccse")}>
                CCSE - Certified Cloud Security Engineer
              </a>
              <a onClick={() => handleNavigation("/ec-council/ecde")}>
                ECDE - Certified DevSecOps Engineer
              </a>
              <a onClick={() => handleNavigation("/ec-council/case-net")}>
                CASE NET - Certified Application Security Engineer
              </a>
              <a onClick={() => handleNavigation("/ec-council/case-java")}>
                CASE Java - Certified Application Security Engineer
              </a>
              <a onClick={() => handleNavigation("/ec-council/ecih")}>
                ECIH - EC-Council Certified Incident Handler
              </a>
              <a onClick={() => handleNavigation("/ec-council/csa")}>
                CSA - Certified SOC Analyst
              </a>
              <a onClick={() => handleNavigation("/ec-council/ctia")}>
                CTIA - Certified Threat Intelligence Analyst
              </a>
              <a onClick={() => handleNavigation("/ec-council/wahs")}>
                WAHS - Web Application Hacking & Security
              </a>
            </div>
          </div>

          {/* CompTIA Courses */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/comptia")}
            >
              <span>CompTIA Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a onClick={() => handleNavigation("/comptia/security-plus")}>
                Security Plus
              </a>
              <a onClick={() => handleNavigation("/comptia/pentest-plus")}>
                Pentest Plus
              </a>
              <a onClick={() => handleNavigation("/comptia/cysa-plus")}>
                CYSA Plus
              </a>
              <a onClick={() => handleNavigation("/comptia/network-plus")}>
                Network Plus
              </a>
            </div>
          </div>

          {/* ISACA Certifications */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/isaca")}
            >
              <span>ISACA Certifications</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a onClick={() => handleNavigation("/isaca/cisa")}>
                CISA - Certified Information Systems Auditor
              </a>
              <a onClick={() => handleNavigation("/isaca/cism")}>
                CISM - Certified Information Security Manager
              </a>
              <a onClick={() => handleNavigation("/isaca/crisc")}>
                CRISC - Certified in Risk & Info Systems Control
              </a>
            </div>
          </div>

          {/* Cloud Computing */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/cloud-computing")}
            >
              <span>Cloud Computing</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a
                onClick={() =>
                  handleNavigation("/courses/aws-cloud-practitioner")
                }
              >
                AWS Cloud Practitioner
              </a>
              <a
                onClick={() => handleNavigation("/courses/solution-architect")}
              >
                Solution Architect
              </a>
              <a onClick={() => handleNavigation("/courses/sysops-admin")}>
                SysOps Admin
              </a>
            </div>
          </div>

          {/* Cyber Diploma Course */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/cyber-diploma")}
            >
              <span>Cyber Diploma Course</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a onClick={() => handleNavigation("/courses/cyber-diploma")}>
                Advanced Diploma in Cyber Security
              </a>
            </div>
          </div>

          {/* Z2I Custom Courses */}
          <div className="dropdown-category">
            <div
              className="dropdown-category-item"
              onClick={() => handleNavigation("/z2i-custom-courses")}
            >
              <span>Z2I Custom Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <a onClick={() => handleNavigation("/courses/python")}>
                Python Programming
              </a>
              <a onClick={() => handleNavigation("/courses/java")}>
                Java Development
              </a>
              <a onClick={() => handleNavigation("/courses/dot-net")}>
                Dot Net Development
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileDropdown = () => (
    <div className="mobile-dropdown-list">
      {/* All Courses */}
      <div className="mobile-dropdown-item">
        <div
          className="mobile-dropdown-header"
          onClick={() => handleDropdownClick("/all-courses", "allCourses")}
        >
          <span>All Courses</span>
          {openDropdowns.allCourses ? <FaChevronDown /> : <FaChevronRight />}
        </div>
        {openDropdowns.allCourses && (
          <div className="mobile-dropdown-content">
            {/* EC-Council Courses */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => handleDropdownClick("/ec-council", "ecCouncil")}
              >
                <span>EC-Council Courses</span>
                {openDropdowns.ecCouncil ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {openDropdowns.ecCouncil && (
                <div className="mobile-submenu-content">
                  <a
                    onClick={() =>
                      handleNavigation("/ethical-hacking-training-in-chennai")
                    }
                  >
                    CEH - Certified Ethical Hacker
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/cpent")}>
                    CPENT - Certified Penetration Tester
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/chfi")}>
                    CHFI - Computer Hacking Forensic Investigator
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/cnd")}>
                    CND - Computer Network Defender
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/ccse")}>
                    CCSE - Certified Cloud Security Engineer
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/ecde")}>
                    ECDE - Certified DevSecOps Engineer
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/case-net")}>
                    CASE NET - Certified Application Security Engineer
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/case-java")}>
                    CASE Java - Certified Application Security Engineer
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/ecih")}>
                    ECIH - EC-Council Certified Incident Handler
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/csa")}>
                    CSA - Certified SOC Analyst
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/ctia")}>
                    CTIA - Certified Threat Intelligence Analyst
                  </a>
                  <a onClick={() => handleNavigation("/ec-council/wahs")}>
                    WAHS - Web Application Hacking & Security
                  </a>
                </div>
              )}
            </div>

            {/* CompTIA Courses */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => handleDropdownClick("/comptia", "comptia")}
              >
                <span>CompTIA Courses</span>
                {openDropdowns.comptia ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {openDropdowns.comptia && (
                <div className="mobile-submenu-content">
                  <a onClick={() => handleNavigation("/comptia/security-plus")}>
                    Security Plus
                  </a>
                  <a onClick={() => handleNavigation("/comptia/pentest-plus")}>
                    Pentest Plus
                  </a>
                  <a onClick={() => handleNavigation("/comptia/cysa-plus")}>
                    CYSA Plus
                  </a>
                  <a onClick={() => handleNavigation("/comptia/network-plus")}>
                    Network Plus
                  </a>
                </div>
              )}
            </div>

            {/* ISACA Certifications */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => handleDropdownClick("/isaca", "isaca")}
              >
                <span>ISACA Certifications</span>
                {openDropdowns.isaca ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {openDropdowns.isaca && (
                <div className="mobile-submenu-content">
                  <a onClick={() => handleNavigation("/isaca/cisa")}>
                    CISA - Certified Information Systems Auditor
                  </a>
                  <a onClick={() => handleNavigation("/isaca/cism")}>
                    CISM - Certified Information Security Manager
                  </a>
                  <a onClick={() => handleNavigation("/isaca/crisc")}>
                    CRISC - Certified in Risk & Info Systems Control
                  </a>
                </div>
              )}
            </div>

            {/* Cloud Computing */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() =>
                  handleDropdownClick("/cloud-computing", "cloudComputing")
                }
              >
                <span>Cloud Computing</span>
                {openDropdowns.cloudComputing ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {openDropdowns.cloudComputing && (
                <div className="mobile-submenu-content">
                  <a
                    onClick={() =>
                      handleNavigation("/courses/aws-cloud-practitioner")
                    }
                  >
                    AWS Cloud Practitioner
                  </a>
                  <a
                    onClick={() =>
                      handleNavigation("/courses/solution-architect")
                    }
                  >
                    Solution Architect
                  </a>
                  <a onClick={() => handleNavigation("/courses/sysops-admin")}>
                    SysOps Admin
                  </a>
                </div>
              )}
            </div>

            {/* Cyber Diploma Course */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() =>
                  handleDropdownClick("/cyber-diploma", "cyberDiploma")
                }
              >
                <span>Cyber Diploma Course</span>
                {openDropdowns.cyberDiploma ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {openDropdowns.cyberDiploma && (
                <div className="mobile-submenu-content">
                  <a onClick={() => handleNavigation("/courses/cyber-diploma")}>
                    Advanced Diploma in Cyber Security
                  </a>
                </div>
              )}
            </div>

            {/* Z2I Custom Courses */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() =>
                  handleDropdownClick("/z2i-custom-courses", "z2iCustom")
                }
              >
                <span>Z2I Custom Courses</span>
                {openDropdowns.z2iCustom ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
              {openDropdowns.z2iCustom && (
                <div className="mobile-submenu-content">
                  <a onClick={() => handleNavigation("/courses/python")}>
                    Python Programming
                  </a>
                  <a onClick={() => handleNavigation("/courses/java")}>
                    Java Development
                  </a>
                  <a onClick={() => handleNavigation("/courses/dot-net")}>
                    Dot Net Development
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="py-2 top-bar d-none d-md-flex">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="social-icons d-flex">
            <a
              href="https://www.instagram.com/zero2infynite/"
              className="me-3 text-white"
            >
              <FaInstagram id="insta-icon" />
            </a>
            <a
              href="https://www.facebook.com/Zero2Infynite/"
              className="me-3 text-white"
            >
              <FaFacebook id="fb-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/zero2infynite"
              className="me-3 text-white"
            >
              <FaLinkedinIn id="linkedin-icon" />
            </a>
          </div>
          <div className="d-flex">
            <a
              href="mailto:pradhan@zero2infynite.com"
              className="text-decoration-none  align-items-center justify-content-center me-4 "
            >
              <MdEmail className="me-1" /> pradhan@zero2infynite.com
            </a>
            <a
              href="tel:+919087924334"
              className="text-decoration-none d-none d-md-flex align-items-center justify-content-center"
            >
              <FaPhoneAlt className="me-1" /> +91 96000 46662
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar
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
            <Nav className="mx-auto">
              <Nav.Link
                onClick={() => handleNavigation("/")}
                className="nav-item"
              >
                Home
              </Nav.Link>

              {/* Conditional rendering based on screen size */}
              {isMobile ? renderMobileDropdown() : renderDesktopDropdown()}

              <Nav.Link
                onClick={() => handleNavigation("/internship")}
                className="nav-item"
              >
                Internship
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
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Enroll Now
          </Button>
        </Container>
      </Navbar>
      {scrolled && <div style={{ height: "56px" }}></div>}
      <IndiCoursePopUPFormComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default SimpleNavbar;
