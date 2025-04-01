import React, { useState, useEffect } from 'react';
import '../whower/whowe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Only import the images we're actually using
import visionImage from '../../../assets/images/whowe.jpg';
import missionImage from '../../../assets/images/whowe.jpg';
import valuesImage from '../../../assets/images/whowe.jpg';

const WhoWe = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('right');
    const cardsData = [
        {
            id: 1,
            title: "Our Vision",
            description: "We strive to create innovative solutions that transform businesses and improve lives through technology.",
            img: visionImage
        },
        {
            id: 2,
            title: "Our Mission",
            description: "To deliver exceptional service and value to our clients while maintaining the highest standards of integrity and excellence.",
            img: missionImage
        },
        {
            id: 3,
            title: "Our Values",
            description: "We believe in collaboration, innovation, integrity, and creating a positive impact in everything we do.",
            img: valuesImage
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideDirection('right');
            setActiveIndex(prevIndex => (prevIndex + 1) % cardsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [cardsData.length]);

    const handleDotClick = (index) => {
        setSlideDirection(index > activeIndex ? 'right' : 'left');
        setActiveIndex(index);
    };

    return (
        <div className="who-we-container">
            <div className="fullscreen-slider">
                {cardsData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`slide ${index === activeIndex ? 'active' : ''} ${slideDirection}`}
                        style={{
                            backgroundImage: `url(${card.img})`,
                            opacity: index === activeIndex ? 1 : 0,
                            zIndex: index === activeIndex ? 1 : 0
                        }}
                    >
                        <div className="blue-overlay">
                            {/* Blue overlay without text */}
                        </div>
                        <div className="card-description">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <div className="dots-navigation">
                                {cardsData.map((_, dotIndex) => (
                                    <span
                                        key={dotIndex}
                                        className={`nav-dot ${dotIndex === activeIndex ? 'active' : ''}`}
                                        onClick={() => handleDotClick(dotIndex)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhoWe;