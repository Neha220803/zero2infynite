import React from "react";
import "./Contactus.css";

const ContactUsHomeComp = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact us</h2>
      <p className="contact-subtitle">
        Ready to enhance your cybersecurity skills?
        <br />
        Get in touch with Zero2infynite for world-class training in ethical
        hacking, cloud computing, and more.
      </p>

      <div className="contact-info-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Call us</h3>
            <p>+91 9445958426</p>
            <p>+91 9790958426</p>
          </div>

          <div className="info-item">
            <h3>Email us</h3>
            <p>zero2infynite@gmail.com</p>
            <p>info@zero2infynite.com</p>
          </div>

          <div className="info-item">
            <h3>Visit us</h3>
            <p>No 4, Nungambakkam High Road,</p>
            <p>Chennai, Tamil Nadu 600034</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6966487966897!2d80.2924056!3d13.118393800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f71eb7594c1%3A0x1d8480e10006fbce!2sZero2infynite%20Ethical%20Hacking%20cloud%20computing%20Python%20Java%20Web%20Development%20software%20testing%20training%20in%20Chennai!5e0!3m2!1sen!2sin!4v1745084179596!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHomeComp;
