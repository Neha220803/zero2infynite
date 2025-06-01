import React, { useState, useEffect } from 'react';
import testibg from '../assets/images/Testimonial/testibg.jpg';

const TestimonialPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set([1])); // Start with first card visible
  const [visibleVideos, setVisibleVideos] = useState(new Set([1])); // Start with first video visible

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Vamsi K.",
      initials: "VK",
      bgColor: "bg-success",
      title: "Recommended",
      text: "Very happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available."
    },
    {
      id: 2,
      name: "Leonie A.",
      initials: "LA",
      bgColor: "bg-info",
      title: "Awesome app very user friendly",
      text: "Would highly recommend Jeton to my friends."
    },
    {
      id: 3,
      name: "Karl R.",
      initials: "KR",
      bgColor: "bg-warning",
      title: "The best payment solution for German customers",
      text: "I've been a Jeton user for a few years! The support was always great and I'm always able to make my payments to the websites I want with no problem."
    },
    {
      id: 4,
      name: "Dennis P.",
      initials: "DP",
      bgColor: "bg-danger",
      title: "Excellent Service",
      text: "Fast transactions, reliable support, and user-friendly interface. Highly recommended for online payments."
    },
    {
      id: 5,
      name: "Sarah M.",
      initials: "SM",
      bgColor: "bg-primary",
      title: "Great Experience",
      text: "Been using this service for months now. Simple, secure, and efficient. Customer service is top-notch."
    }
  ];

  // Sample YouTube video IDs (you can replace these with your actual video IDs)
  const youtubeVideos = [
    { id: 1, videoId: "dQw4w9WgXcQ", title: "Customer Review 1" },
    { id: 2, videoId: "9bZkp7q19f0", title: "Customer Review 2" },
    { id: 3, videoId: "kJQP7kiw5Fk", title: "Customer Review 3" },
    { id: 4, videoId: "tgbNymZ7vqY", title: "Customer Review 4" },
    { id: 5, videoId: "60ItHLz5WEA", title: "Customer Review 5" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      // Sequential appearance - each card appears one after another
      const cardThreshold = 0.08; // Start showing cards after 8% scroll
      const cardInterval = 0.15; // Each subsequent card appears after 15% more scroll

      const videoThreshold = 0.08; // Start showing videos after 8% scroll
      const videoInterval = 0.15; // Each subsequent video appears after 15% more scroll

      // Calculate how many cards should be visible
      let visibleCardCount = 1; // Always show at least the first card
      if (scrollProgress > cardThreshold) {
        visibleCardCount = Math.min(
          Math.floor((scrollProgress - cardThreshold) / cardInterval) + 2,
          testimonials.length
        );
      }

      // Calculate how many videos should be visible
      let visibleVideoCount = 1; // Always show at least the first video
      if (scrollProgress > videoThreshold) {
        visibleVideoCount = Math.min(
          Math.floor((scrollProgress - videoThreshold) / videoInterval) + 2,
          youtubeVideos.length
        );
      }

      // Create sets of visible items - cards/videos disappear when scrolling up
      const newVisibleCards = new Set();
      const newVisibleVideos = new Set();

      for (let i = 1; i <= visibleCardCount; i++) {
        newVisibleCards.add(i);
      }

      for (let i = 1; i <= visibleVideoCount; i++) {
        newVisibleVideos.add(i);
      }

      setVisibleCards(newVisibleCards);
      setVisibleVideos(newVisibleVideos);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [testimonials.length, youtubeVideos.length]);

  return (
    <div className="testimonial-page">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .testimonial-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        
        .testimonial-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('${testibg}') center/cover;
          background-attachment: fixed;
          background-repeat: no-repeat;
          z-index: 1;
        }
        
        .testimonial-page::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
          z-index: 2;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 3;
          padding: 40px 0 80px;
        }
        
        .hero-section {
          text-align: center;
          padding: 40px 0 30px;
          color: white;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-title {
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 20px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 25px;
          margin: 25px 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transform: translateY(-50px) scale(0.95);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s ease;
        }
        
        .testimonial-card:hover::before {
          left: 100%;
        }
        
        .testimonial-card.visible {
          transform: translateY(0) scale(1);
          opacity: 1;
          animation: glow 3s ease-in-out infinite;
          z-index: 2;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 30px 60px rgba(102, 126, 234, 0.3);
        }
        
        .user-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 15px;
          transition: all 0.3s ease;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .testimonial-card:hover .user-avatar {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .testimonial-title {
          font-weight: 600;
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        
        .testimonial-card:hover .testimonial-title {
          color: #667eea;
        }
        
        .testimonial-text {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
          flex-grow: 1;
          transition: all 0.3s ease;
        }
        
        .testimonial-author {
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
          margin-top: auto;
          transition: color 0.3s ease;
        }
        
        .testimonial-card:hover .testimonial-author {
          color: #667eea;
        }
        
        .video-container {
          margin: 25px 0;
          transform: translateY(-50px) scale(0.95);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          height: 320px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }
        
        .video-container.visible {
          transform: translateY(0) scale(1);
          opacity: 1;
          z-index: 2;
        }
        
        .video-container:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .video-wrapper {
          position: relative;
          width: 100%;
          height: 255px;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          background: #000;
          transition: all 0.3s ease;
        }
        
        .video-container:hover .video-wrapper {
          box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
          transform: scale(1.01);
        }
        
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 15px;
        }
        
        .video-title {
          background: rgba(149, 146, 146, 0.95);
          padding: 10px 15px;
          border-radius: 8px;
          margin-top: 8px;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: center;
          color: #333;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .video-title::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .video-container:hover .video-title::before {
          left: 100%;
        }
        
        .video-container:hover .video-title {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          transform: translateY(-2px);
        }
        
        .section-spacing {
          margin: 20px 0;
        }
        
        /* Perfect alignment for cards and videos */
        .content-row {
          display: flex;
          align-items: flex-start;
          gap: 30px;
        }
        
        .testimonial-column,
        .video-column {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        /* Add floating particles effect */
        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
          animation: float 8s ease-in-out infinite;
        }
        
        .floating-element:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-element:nth-child(2) {
          width: 15px;
          height: 15px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .floating-element:nth-child(3) {
          width: 25px;
          height: 25px;
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }
        
        /* Add more spacing to allow for proper scrolling */
        .extra-spacing {
          height: 100vh;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            padding: 0 20px;
          }
          
          .content-wrapper {
            padding: 20px 0 40px;
          }
          
          .hero-section {
            padding: 20px 0 20px;
          }
          
          .content-row {
            flex-direction: column;
            gap: 15px;
            padding: 0 15px;
          }
          
          .testimonial-card {
            margin: 10px 0;
            padding: 20px;
            height: auto;
            min-height: 250px;
            transform: translateY(-30px) scale(0.98);
            border-radius: 15px;
          }
          
          .testimonial-card.visible {
            transform: translateY(0) scale(1);
          }
          
          .testimonial-card:hover {
            transform: translateY(-2px) scale(1.01);
          }
          
          .video-container {
            margin: 10px 0;
            height: auto;
            transform: translateY(-30px) scale(0.98);
          }
          
          .video-container.visible {
            transform: translateY(0) scale(1);
          }
          
          .video-container:hover {
            transform: translateY(-2px) scale(1.01);
          }
          
          .video-wrapper {
            height: 200px;
          }
          
          .video-title {
            font-size: 0.85rem;
            padding: 8px 12px;
            height: 32px;
            margin-top: 6px;
          }
          
          .testimonial-column,
          .video-column {
            padding: 0;
            width: 100%;
          }
          
          .user-avatar {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
          
          .testimonial-title {
            font-size: 1rem;
            margin-bottom: 10px;
          }
          
          .testimonial-text {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .testimonial-author {
            font-size: 0.9rem;
          }
          
          .floating-element {
            display: none;
          }
          
          .extra-spacing {
            height: 50vh;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            padding: 0 15px;
          }
          
          .content-row {
            padding: 0 10px;
          }
          
          .testimonial-card {
            padding: 15px;
            margin: 8px 0;
            border-radius: 12px;
          }
          
          .video-container {
            margin: 8px 0;
          }
          
          .video-wrapper {
            height: 180px;
            border-radius: 12px;
          }
          
          .video-title {
            font-size: 0.8rem;
            padding: 6px 10px;
            height: 28px;
            border-radius: 6px;
          }
          
          .user-avatar {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
          }
          
          .testimonial-title {
            font-size: 0.95rem;
          }
          
          .testimonial-text {
            font-size: 0.85rem;
          }
          
          .testimonial-author {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="content-wrapper">
        {/* Floating Elements for Extra Animation */}
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="container">
            <h1 className="hero-title">Hear it from our clients</h1>
            <p className="hero-subtitle">
              Discover what our customers say about their experience with our services
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="content-row">
            {/* Left Side - Testimonials */}
            <div className="testimonial-column">
              <div className="section-spacing">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-card ${visibleCards.has(testimonial.id) ? 'visible' : ''}`}
                    style={{
                      transitionDelay: `${index * 0.3}s`,
                      zIndex: visibleCards.has(testimonial.id) ? 10 + index : 1,
                      marginTop: index === 0 ? '0px' : '-20px'
                    }}
                  >
                    <div>
                      <div className={`user-avatar ${testimonial.bgColor}`}>
                        {testimonial.initials}
                      </div>
                      <div className="testimonial-title">{testimonial.title}</div>
                      <div className="testimonial-text">{testimonial.text}</div>
                    </div>
                    <div className="testimonial-author">{testimonial.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - YouTube Videos */}
            <div className="video-column">
              <div className="section-spacing">
                {youtubeVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`video-container ${visibleVideos.has(video.id) ? 'visible' : ''}`}
                    style={{
                      transitionDelay: `${index * 0.3}s`,
                      zIndex: visibleVideos.has(video.id) ? 10 + index : 1,
                      marginTop: index === 0 ? '0px' : '-20px'
                    }}
                  >
                    <div className="video-wrapper">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        allowFullScreen
                      />
                    </div>
                    <div className="video-title">{video.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Extra spacing to allow full scroll experience */}
        <div className="extra-spacing"></div>
      </div>
    </div>
  );
};

export default TestimonialPage;