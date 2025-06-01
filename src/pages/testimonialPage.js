import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../pages/testimonialPage.css'; // Adjust the path as necessary
import testibg from '../assets/images/Testimonial/testibg.jpg';

const TestimonialPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set([1]));
  const [visibleVideos, setVisibleVideos] = useState(new Set([1]));

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

  // Sample YouTube video IDs
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

      // Calculate when each card should appear based on scroll position
      const startOffset = windowHeight * 0.3; // Start showing cards after 30% of viewport
      const cardSpacing = windowHeight * 0.4; // Space between each card trigger

      const newVisibleCards = new Set([1]); // Always show first card
      const newVisibleVideos = new Set([1]); // Always show first video

      // Add cards/videos based on scroll position
      testimonials.forEach((_, index) => {
        const triggerPoint = startOffset + (index * cardSpacing);
        if (scrollY >= triggerPoint) {
          newVisibleCards.add(index + 1);
        }
      });

      youtubeVideos.forEach((_, index) => {
        const triggerPoint = startOffset + (index * cardSpacing);
        if (scrollY >= triggerPoint) {
          newVisibleVideos.add(index + 1);
        }
      });

      setVisibleCards(newVisibleCards);
      setVisibleVideos(newVisibleVideos);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [testimonials, youtubeVideos]);

  // Set background image dynamically
  useEffect(() => {
    const testimonialPage = document.querySelector('.testimonial-page::before');
    const styleSheet = document.styleSheets[0];

    // Create or update CSS rule for background image
    const bgRule = `
      .testimonial-page::before {
        background-image: url('${testibg}') !important;
      }
    `;

    // Add the rule to stylesheet
    const style = document.createElement('style');
    style.textContent = bgRule;
    document.head.appendChild(style);

    return () => {
      // Cleanup - remove the style element when component unmounts
      document.head.removeChild(style);
    };
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 30px 60px rgba(102, 126, 234, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const avatarVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 }
    }
  };

  const textHoverVariants = {
    hover: { color: "#667eea", transition: { duration: 0.3 } }
  };

  const videoVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  const videoHoverVariants = {
    hover: { y: -5, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const shimmerVariants = {
    animate: { x: ["-100%", "100%"], transition: { duration: 0.8, ease: "easeInOut" } }
  };

  const floatingElementVariants = {
    animate: (i) => ({
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 2
      }
    })
  };

  return (
    <div className="testimonial-page">
      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Elements */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="floating-element"
            variants={floatingElementVariants}
            animate="animate"
            custom={i}
          />
        ))}

        {/* Hero Section */}
        <motion.div
          className="hero-section"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container">
            <motion.h1
              className="hero-title"
              variants={floatingVariants}
              animate="animate"
            >
              Hear it from our clients
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              Discover what our customers say about their experience with our services
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container">
          <div className="content-row">
            {/* Left Side - Testimonials */}
            <div className="testimonial-column">
              <div className="section-spacing">
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    visibleCards.has(testimonial.id) && (
                      <motion.div
                        key={testimonial.id}
                        className="testimonial-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={cardHoverVariants.hover}
                        custom={index}
                        transition={{ delay: index * 0.3 }}
                        style={{
                          zIndex: visibleCards.has(testimonial.id) ? 10 + index : 1,
                          marginTop: index === 0 ? '0px' : '-20px'
                        }}
                      >
                        <motion.div
                          className="shimmer-overlay"
                          variants={shimmerVariants}
                          whileHover="animate"
                        />

                        <div>
                          <motion.div
                            className={`user-avatar ${testimonial.bgColor}`}
                            variants={avatarVariants}
                            animate="animate"
                            whileHover="hover"
                          >
                            {testimonial.initials}
                          </motion.div>

                          <motion.div
                            className="testimonial-title"
                            variants={textHoverVariants}
                            whileHover="hover"
                          >
                            {testimonial.title}
                          </motion.div>

                          <div className="testimonial-text">{testimonial.text}</div>
                        </div>

                        <motion.div
                          className="testimonial-author"
                          variants={textHoverVariants}
                          whileHover="hover"
                        >
                          {testimonial.name}
                        </motion.div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side - YouTube Videos */}
            <div className="video-column">
              <div className="section-spacing">
                <AnimatePresence>
                  {youtubeVideos.map((video, index) => (
                    visibleVideos.has(video.id) && (
                      <motion.div
                        key={video.id}
                        className="video-container"
                        variants={videoVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover={videoHoverVariants.hover}
                        transition={{ delay: index * 0.3 }}
                        style={{
                          zIndex: visibleVideos.has(video.id) ? 10 + index : 1,
                          marginTop: index === 0 ? '0px' : '-20px'
                        }}
                      >
                        <motion.div
                          className="video-wrapper"
                          whileHover={{
                            boxShadow: "0 20px 50px rgba(102, 126, 234, 0.3)",
                            scale: 1.01
                          }}
                        >
                          <iframe
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allowFullScreen
                          />
                        </motion.div>

                        <motion.div
                          className="video-title"
                          whileHover={{
                            background: "rgba(102, 126, 234, 0.1)",
                            color: "#667eea",
                            y: -2
                          }}
                        >
                          <motion.div
                            className="shimmer-overlay"
                            variants={shimmerVariants}
                            whileHover="animate"
                          />
                          {video.title}
                        </motion.div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="extra-spacing"></div>
      </motion.div>
    </div>
  );
};

export default TestimonialPage;