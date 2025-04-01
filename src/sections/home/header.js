import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/header.css"; // Ensure you have the correct path to your CSS file
// Import video directly
import headerBg from "../../assets/videos/headerbg1.mp4"; // Update with your actual file path and name

const HomeHeader = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="header-container position-relative">
      {/* Video Background using imported video */}
      <video className="video-background" autoPlay loop muted>
        <source src={headerBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="overlay"></div>

      <div className="container position-relative z-index-1">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6">
            <div className="header-content text-white">
              <h1 className="mb-4">Let's Connect </h1>
              <button className="btn btn-primary px-4 py-2">
                Learn the best tactics to ensure Cybersecurity
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-container bg-dark p-4 rounded">
              <h2 className="text-white mb-4">Connect With us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Zero 2 Infinite"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="info@zero2infinite.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-white">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="qualification" className="form-label text-white">Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    name="qualification"
                    placeholder="B.Tech"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;