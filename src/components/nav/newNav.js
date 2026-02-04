import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
      const topBarHeight =
        document.querySelector(".top-bar")?.offsetHeight || 50;
      setScrolled(window.scrollY > topBarHeight);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setOpenDropdowns({});
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
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
          {/* EC Council */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>EC-Council Courses</span>
              <FaChevronRight />
            </div>
            <div className="category-submenu">
              <Link to="/ethical-hacking-training-in-chennai">CEH</Link>
              <Link to="/ec-council/cpent">CPENT</Link>
              <Link to="/ec-council/chfi">CHFI</Link>
              <Link to="/ec-council/cnd">CND</Link>
              <Link to="/ec-council/ccse">CCSE</Link>
              <Link to="/ec-council/ecde">ECDE</Link>
              <Link to="/ec-council/case-net">CASE NET</Link>
              <Link to="/ec-council/case-java">CASE Java</Link>
              <Link to="/ec-council/ecih">ECIH</Link>
              <Link to="/ec-council/csa">CSA</Link>
              <Link to="/ec-council/ctia">CTIA</Link>
              <Link to="/ec-council/wahs">WAHS</Link>
            </div>
          </div>

          {/* CompTIA */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>CompTIA Courses</span>
              <FaChevronRight />
            </div>
            <div className="category-submenu">
              <Link to="/comptia/security-plus">Security+</Link>
              <Link to="/comptia/pentest-plus">Pentest+</Link>
              <Link to="/comptia/cysa-plus">CYSA+</Link>
              <Link to="/comptia/network-plus">Network+</Link>
            </div>
          </div>

          {/* ISACA */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>ISACA Certifications</span>
              <FaChevronRight />
            </div>
            <div className="category-submenu">
              <Link to="/isaca/cisa">CISA</Link>
              <Link to="/isaca/cism">CISM</Link>
              <Link to="/isaca/crisc">CRISC</Link>
            </div>
          </div>

          {/* Cloud */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>Cloud Computing</span>
              <FaChevronRight />
            </div>
            <div className="category-submenu">
              <Link to="/courses/aws-cloud-practitioner">
                AWS Cloud Practitioner
              </Link>
              <Link to="/courses/solution-architect">Solution Architect</Link>
              <Link to="/courses/sysops-admin">SysOps Admin</Link>
            </div>
          </div>

          {/* Custom */}
          <div className="dropdown-category">
            <div className="dropdown-category-item">
              <span>Z2I Custom Courses</span>
              <FaChevronRight />
            </div>
            <div className="category-submenu">
              <Link to="/courses/python">Python</Link>
              <Link to="/courses/java">Java</Link>
              <Link to="/courses/dot-net">Dot Net</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="py-2 top-bar d-none d-md-flex">
        <Container className="d-flex justify-content-between">
          <div className="social-icons">
            <a href="https://www.instagram.com/zero2infynite/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/Zero2Infynite/">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/zero2infynite">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <a href="mailto:pradhan@zero2infynite.com">
              <MdEmail /> pradhan@zero2infynite.com
            </a>
            <a href="tel:+919600046662">
              <FaPhoneAlt /> +91 96000 46662
            </a>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" expanded={expanded} className="main-navbar">
        <Container>
          <Navbar.Brand onClick={() => handleNavigation("/")}>
            <img src={logo} alt="Zero2Infynite" height="60" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {renderDesktopDropdown()}
              <Nav.Link as={Link} to="/internship">
                Internship
              </Nav.Link>
              <Nav.Link as={Link} to="/testimonial">
                Testimonial
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button onClick={() => setModalShow(true)}>Enroll Now</Button>
        </Container>
      </Navbar>

      <IndiCoursePopUPFormComp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default SimpleNavbar;
