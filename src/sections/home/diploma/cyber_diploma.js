import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './cyber_diploma.css';

const CyberDiploma = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);

    // Update cards to show based on screen size
    React.useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth <= 768) {
                setCardsToShow(1);
            } else if (window.innerWidth <= 968) {
                setCardsToShow(2);
            } else if (window.innerWidth <= 1200) {
                setCardsToShow(3);
            } else {
                setCardsToShow(4);
            }
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const courses = [
        {
            id: 1,
            title: "CEH Masters Program",
            subtitle: "Certified Ethical Hacker",
            rating: 4.9,
            reviews: 2847,
            description: "Master the art of ethical hacking with comprehensive penetration testing techniques and vulnerability assessment methodologies...",
            color: "from-pink-500 to-rose-600",
            icon: "🛡️"
        },
        {
            id: 2,
            title: "Penetration Testing Program",
            subtitle: "Advanced PT Certification",
            rating: 4.8,
            reviews: 1923,
            description: "Advanced penetration testing program focusing on real-world scenarios and cutting-edge security testing frameworks...",
            color: "from-yellow-500 to-orange-500",
            icon: "🔍"
        },
        {
            id: 3,
            title: "SIEM Masters Program",
            subtitle: "Security Information & Event Management",
            rating: 4.9,
            reviews: 1654,
            description: "Master SIEM technologies with hands-on experience in security monitoring, incident response, and threat detection...",
            color: "from-purple-500 to-purple-700",
            icon: "📊"
        },
        {
            id: 4,
            title: "CHFI Masters Program",
            subtitle: "Computer Hacking Forensic Investigator",
            rating: 4.7,
            reviews: 1432,
            description: "Comprehensive digital forensics program covering incident response, evidence collection, and cybercrime investigation...",
            color: "from-emerald-500 to-teal-600",
            icon: "🔬"
        },
        {
            id: 5,
            title: "Security Auditing Program",
            subtitle: "Advanced Security Assessment",
            rating: 4.8,
            reviews: 1789,
            description: "Master security auditing techniques with comprehensive risk assessment and compliance frameworks...",
            color: "from-pink-500 to-purple-600",
            icon: "📋"
        }
    ];

    const nextSlide = () => {
        const maxIndex = Math.max(0, courses.length - cardsToShow);
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? Math.max(0, courses.length - cardsToShow) : prevIndex - 1
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="cyber-diploma-container">
            <motion.div
                className="header-section"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="main-title">
                    Cyber Security <span className="highlight">Diploma Courses</span>
                </h1>
                <p className="subtitle">
                    6-Month intensive diploma programs designed for cybersecurity career advancement. Master cutting-edge security technologies with hands-on training.
                </p>
            </motion.div>

            <div className="carousel-container">
                <motion.button
                    className="nav-arrow nav-arrow-left"
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>

                <div className="courses-carousel">
                    <motion.div
                        className="courses-track"
                        animate={{
                            x: `${-currentIndex * (100 / cardsToShow)}%`
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                className="diplocards"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={`diplo-card-header bg-gradient-to-r ${course.color}`}>
                                    <motion.h3
                                        className="diplo-course-title"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {course.title}
                                    </motion.h3>
                                </div>

                                <div className="diplo-card-body">
                                    <div className="diplo-card-content">
                                        <p className="diplo-course-subtitle">{course.subtitle}</p>

                                        <motion.div
                                            className="diplo-rating-section"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 + index * 0.1 }}
                                        >
                                            <div className="diplo-stars">
                                                {[...Array(5)].map((_, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="diplo-star"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{
                                                            delay: 0.8 + index * 0.1 + i * 0.05,
                                                            type: "spring",
                                                            stiffness: 200
                                                        }}
                                                    >
                                                        ⭐
                                                    </motion.span>
                                                ))}
                                            </div>
                                            <span className="diplo-rating-text">
                                                {course.rating} ({course.reviews} Reviews)
                                            </span>
                                        </motion.div>

                                        <motion.p
                                            className="diplo-course-description"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.9 + index * 0.1 }}
                                        >
                                            {course.description}
                                        </motion.p>
                                    </div>

                                    <div className="diplo-card-features-section">
                                        <motion.div
                                            className="diplo-course-features"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 + index * 0.1 }}
                                        >
                                            <div className="diplo-feature">📅 6 Month Duration</div>
                                            <div className="diplo-feature">🎓 Industry Certification</div>
                                            <div className="diplo-feature">💼 Job Assistance</div>
                                        </motion.div>

                                        <motion.button
                                            className="diplo-enroll-btn"
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.1 + index * 0.1 }}
                                        >
                                            Enroll Now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.button
                    className="nav-arrow nav-arrow-right"
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>
            </div>

            <motion.div
                className="cta-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <h2>Ready to Start Your Cybersecurity Journey?</h2>
                <p>Join thousands of professionals who have advanced their careers with our comprehensive diploma programs.</p>
                <motion.button
                    className="cta-button"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0 15px 40px rgba(99, 102, 241, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    View All Programs
                </motion.button>
            </motion.div>
        </div>
    );
};

export default CyberDiploma;