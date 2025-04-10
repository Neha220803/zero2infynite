import React from "react";

const InternshipPage = () => {
  return (
    <>
      <style>
        {`
          .internship-page {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .internship-page h1 {
            text-align: center;
            color: #333;
            margin-bottom: 2rem;
          }

          .internship-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .internship-item {
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            transition: transform 0.2s;
          }

          .internship-item:hover {
            transform: translateY(-5px);
          }

          .internship-item h2 {
            color: #2c5282;
            margin-bottom: 1rem;
          }

          .internship-item p {
            color: #666;
            margin-bottom: 1rem;
          }

          .internship-item ul {
            list-style: none;
            padding: 0;
          }

          .internship-item li {
            color: #4a5568;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
          }

          .internship-item li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2c5282;
          }
        `}
      </style>
      <section className="internship-page">
        <h1>Internships offered by us</h1>
        <div className="internship-list">
          <div className="internship-item">
            <h2>Cyber Security Internship</h2>
            <p>
              Learn about network security, ethical hacking, and security
              protocols.
            </p>
            <ul>
              <li>Duration: 3 months</li>
              <li>Location: Remote/On-site</li>
              <li>Type: Full-time</li>
            </ul>
          </div>
          <div className="internship-item">
            <h2>Digital Marketing Internship</h2>
            <p>Master social media marketing, SEO, and content strategy.</p>
            <ul>
              <li>Duration: 3 months</li>
              <li>Location: Remote/On-site</li>
              <li>Type: Full-time</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternshipPage;
