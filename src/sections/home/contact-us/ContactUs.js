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
            <h1>Connecting Near & Far</h1>

            <div className="headquarters-section">
              <h3>Headquarters</h3>

              <div className="headquarters-list">
                <div className="headquarters-item">
                  <h4>Chennai Office</h4>
                  <p>Executive Zone, Shakti Tower 1, 766, Anna Salai,</p>
                  <p>Thousand Lights, Chennai, Tamil Nadu 600002</p>
                </div>

                <div className="headquarters-item">
                  <h4>Nungambakkam Office</h4>
                  <p>No 4, Nungambakkam High Road,</p>
                  <p>Chennai, Tamil Nadu 600034</p>
                </div>
              </div>

              {/* <div className="contact-details">
                <div className="contact-item">
                  <h4>Call us</h4>
                  <p>+91 9445958426</p>
                  <p>+91 9790958426</p>
                </div>
              </div> */}
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
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHomeComp;
