import React from "react";
import { MapPin } from "lucide-react";
import "./Contactus.css";

const ContactUsHomeComp = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="location-info">
          <div className="location-header">
            <MapPin className="location-icon" size={24} />
            <h2>Our Location</h2>
          </div>

          <div className="connecting-section">
            <h1>Find us Here</h1>

            <div className="headquarters-section">
              <h3>Headquarters</h3>

              <div className="headquarters-list mb-4">
                <div className="headquarters-item">
                  <h4>Chennai Office</h4>
                  <p>7b, Rajavelu St, Kamaraj Nagar,</p>
                  <p>Royapuram, Chennai, Tamil Nadu 600013</p>
                </div>
              </div>

              <div className="headquarters-list">
                <div className="headquarters-item">
                  <h4>Connect with us</h4>
                  <p>Phone: +91 9445958426</p>
                  <p>Email: pradhan@zero2infynite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6966487966897!2d80.2924056!3d13.118393800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f71eb7594c1%3A0x1d8480e10006fbce!2sZero2infynite%20Ethical%20Hacking%20cloud%20computing%20Python%20Java%20Web%20Development%20software%20testing%20training%20in%20Chennai!5e0!3m2!1sen!2sin!4v1745084179596!5m2!1sen!2sin"
            width="100%"
            height="70%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="g-map w-100 h-100"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHomeComp;
