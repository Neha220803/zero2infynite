import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
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
      if (window.innerWidth >= 992) {
        setOpenDropdowns({});
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigation = (path) => {
    setExpanded(false);
    setOpenDropdowns({});

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

  const renderDesktopDropdown = () => (
    <div className="nav-dropdown-wrapper">
      <div className="desktop-dropdown">
        <Link to="/all-courses" className="dropdown-toggle-btn">
          All Courses <IoMdArrowDropdown />
        </Link>
        <div className="desktop-dropdown-menu">
          {/* EC-Council Courses */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>EC-Council Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/ethical-hacking-training-in-chennai">
                CEH - Certified Ethical Hacker
              </Link>
              <Link to="/ec-council/cpent">
                CPENT - Certified Penetration Tester
              </Link>
              <Link to="/ec-council/chfi">
                CHFI - Computer Hacking Forensic Investigator
              </Link>
              <Link to="/ec-council/cnd">CND - Computer Network Defender</Link>
              <Link to="/ec-council/ccse">
                CCSE - Certified Cloud Security Engineer
              </Link>
              <Link to="/ec-council/ecde">
                ECDE - Certified DevSecOps Engineer
              </Link>
              <Link to="/ec-council/case-net">
                CASE NET - Certified Application Security Engineer
              </Link>
              <Link to="/ec-council/case-java">
                CASE Java - Certified Application Security Engineer
              </Link>
              <Link to="/ec-council/ecih">
                ECIH - EC-Council Certified Incident Handler
              </Link>
              <Link to="/ec-council/csa">CSA - Certified SOC Analyst</Link>
              <Link to="/ec-council/ctia">
                CTIA - Certified Threat Intelligence Analyst
              </Link>
              <Link to="/ec-council/wahs">
                WAHS - Web Application Hacking & Security
              </Link>
            </div>
          </div>

          {/* CompTIA Courses */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>CompTIA Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/comptia/security-plus">Security Plus</Link>
              <Link to="/comptia/pentest-plus">Pentest Plus</Link>
              <Link to="/comptia/cysa-plus">CYSA Plus</Link>
              <Link to="/comptia/network-plus">Network Plus</Link>
            </div>
          </div>

          {/* ISACA Certifications */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>ISACA Certifications</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/isaca/cisa">
                CISA - Certified Information Systems Auditor
              </Link>
              <Link to="/isaca/cism">
                CISM - Certified Information Security Manager
              </Link>
              <Link to="/isaca/crisc">
                CRISC - Certified in Risk & Info Systems Control
              </Link>
            </div>
          </div>

          {/* Cloud Computing */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>Cloud Computing</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/courses/aws-cloud-practitioner">
                AWS Cloud Practitioner
              </Link>
              <Link to="/courses/solution-architect">Solution Architect</Link>
              <Link to="/courses/sysops-admin">SysOps Admin</Link>
            </div>
          </div>

          {/* Cyber Diploma Course */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>Cyber Diploma Course</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/courses/cyber-diploma">
                Advanced Diploma in Cyber Security
              </Link>
            </div>
          </div>

          {/* Z2I Custom Courses */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>Z2I Custom Courses</span>
              <FaChevronRight className="submenu-indicator" />
            </div>
            <div className="category-submenu">
              <Link to="/courses/python">Python Programming</Link>
              <Link to="/courses/java">Java Development</Link>
              <Link to="/courses/dot-net">Dot Net Development</Link>
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
          onClick={() => toggleDropdown("allCourses")}
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
                onClick={() => toggleDropdown("ecCouncil")}
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
                  <Link
                    to="/ethical-hacking-training-in-chennai"
                    onClick={() => setExpanded(false)}
                  >
                    CEH - Certified Ethical Hacker
                  </Link>
                  <Link
                    to="/ec-council/cpent"
                    onClick={() => setExpanded(false)}
                  >
                    CPENT - Certified Penetration Tester
                  </Link>
                  <Link
                    to="/ec-council/chfi"
                    onClick={() => setExpanded(false)}
                  >
                    CHFI - Computer Hacking Forensic Investigator
                  </Link>
                  <Link to="/ec-council/cnd" onClick={() => setExpanded(false)}>
                    CND - Computer Network Defender
                  </Link>
                  <Link
                    to="/ec-council/ccse"
                    onClick={() => setExpanded(false)}
                  >
                    CCSE - Certified Cloud Security Engineer
                  </Link>
                  <Link
                    to="/ec-council/ecde"
                    onClick={() => setExpanded(false)}
                  >
                    ECDE - Certified DevSecOps Engineer
                  </Link>
                  <Link
                    to="/ec-council/case-net"
                    onClick={() => setExpanded(false)}
                  >
                    CASE NET - Certified Application Security Engineer
                  </Link>
                  <Link
                    to="/ec-council/case-java"
                    onClick={() => setExpanded(false)}
                  >
                    CASE Java - Certified Application Security Engineer
                  </Link>
                  <Link
                    to="/ec-council/ecih"
                    onClick={() => setExpanded(false)}
                  >
                    ECIH - EC-Council Certified Incident Handler
                  </Link>
                  <Link to="/ec-council/csa" onClick={() => setExpanded(false)}>
                    CSA - Certified SOC Analyst
                  </Link>
                  <Link
                    to="/ec-council/ctia"
                    onClick={() => setExpanded(false)}
                  >
                    CTIA - Certified Threat Intelligence Analyst
                  </Link>
                  <Link
                    to="/ec-council/wahs"
                    onClick={() => setExpanded(false)}
                  >
                    WAHS - Web Application Hacking & Security
                  </Link>
                </div>
              )}
            </div>

            {/* CompTIA Courses */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => toggleDropdown("comptia")}
              >
                <span>CompTIA Courses</span>
                {openDropdowns.comptia ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {openDropdowns.comptia && (
                <div className="mobile-submenu-content">
                  <Link
                    to="/comptia/security-plus"
                    onClick={() => setExpanded(false)}
                  >
                    Security Plus
                  </Link>
                  <Link
                    to="/comptia/pentest-plus"
                    onClick={() => setExpanded(false)}
                  >
                    Pentest Plus
                  </Link>
                  <Link
                    to="/comptia/cysa-plus"
                    onClick={() => setExpanded(false)}
                  >
                    CYSA Plus
                  </Link>
                  <Link
                    to="/comptia/network-plus"
                    onClick={() => setExpanded(false)}
                  >
                    Network Plus
                  </Link>
                </div>
              )}
            </div>

            {/* ISACA Certifications */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => toggleDropdown("isaca")}
              >
                <span>ISACA Certifications</span>
                {openDropdowns.isaca ? <FaChevronDown /> : <FaChevronRight />}
              </div>
              {openDropdowns.isaca && (
                <div className="mobile-submenu-content">
                  <Link to="/isaca/cisa" onClick={() => setExpanded(false)}>
                    CISA - Certified Information Systems Auditor
                  </Link>
                  <Link to="/isaca/cism" onClick={() => setExpanded(false)}>
                    CISM - Certified Information Security Manager
                  </Link>
                  <Link to="/isaca/crisc" onClick={() => setExpanded(false)}>
                    CRISC - Certified in Risk & Info Systems Control
                  </Link>
                </div>
              )}
            </div>

            {/* Cloud Computing */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => toggleDropdown("cloudComputing")}
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
                  <Link
                    to="/courses/aws-cloud-practitioner"
                    onClick={() => setExpanded(false)}
                  >
                    AWS Cloud Practitioner
                  </Link>
                  <Link
                    to="/courses/solution-architect"
                    onClick={() => setExpanded(false)}
                  >
                    Solution Architect
                  </Link>
                  <Link
                    to="/courses/sysops-admin"
                    onClick={() => setExpanded(false)}
                  >
                    SysOps Admin
                  </Link>
                </div>
              )}
            </div>

            {/* Cyber Diploma Course */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => toggleDropdown("cyberDiploma")}
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
                  <Link
                    to="/courses/cyber-diploma"
                    onClick={() => setExpanded(false)}
                  >
                    Advanced Diploma in Cyber Security
                  </Link>
                </div>
              )}
            </div>

            {/* Z2I Custom Courses */}
            <div className="mobile-submenu-item">
              <div
                className="mobile-submenu-header"
                onClick={() => toggleDropdown("z2iCustom")}
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
                  <Link to="/courses/python" onClick={() => setExpanded(false)}>
                    Python Programming
                  </Link>
                  <Link to="/courses/java" onClick={() => setExpanded(false)}>
                    Java Development
                  </Link>
                  <Link
                    to="/courses/dot-net"
                    onClick={() => setExpanded(false)}
                  >
                    Dot Net Development
                  </Link>
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
              className="text-decoration-none align-items-center justify-content-center me-4"
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
        className={`main-navbar py-2 ${scrolled ? "position-fixed w-100 top-0" : ""}`}
        style={{ zIndex: 1030 }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
