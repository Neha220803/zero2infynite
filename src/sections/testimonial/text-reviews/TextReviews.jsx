import React from "react";
import "./TextReviews.css";

// Sample data array
const reviews = [
  {
    name: "Abishey Ajith",
    stars: 5,
    review:
      "I had experience in cyber field. Had a nice session and all doubts explained clearly.",
  },
  {
    name: "Sahana Mohankumar",
    stars: 5,
    review: "Good coaching and practical sessions",
  },
  {
    name: "Lavanya Kannan",
    stars: 5,
    review:
      "Value for money and professional experience in training.. Helped to get in touch with people from required country for job..",
  },
  {
    name: "Sneha Sai",
    stars: 5,
    review:
      "Way of teaching is good.. Study materials are very good, we can easily understand.. Good place to learn..",
  },
  {
    name: "swaroop bafna",
    stars: 5,
    review:
      "Best place to learn ethical hacking and for internship. even placement is also good.",
  },
  {
    name: "Revathy Kaliappan",
    stars: 5,
    review:
      "I had coaching for CEH from zero2infynite. The classes were very practical rather than just theoretical. Though it was online due to pandemic, it was planned very well and executed efficiently. I would strongly recommend zero2infynite to anyone who wishes to study CEH.",
  },
  {
    name: "Saravanan R",
    stars: 5,
    review:
      "When I start this CEH course, I don't about this domain. After I heard about cyber security courses and researched about good institute to learn. I saw some notice in social media about Zero2Infynite and queried about CEH course and Job placement, since I have worried about my age and job too. I got the solution and I joined. Now I completed and certified from EC council. Got job!!! Thanks to pradhan (director & Instructor).",
  },
  {
    name: "sharvil darne",
    stars: 5,
    review:
      "Very informative courses, Trainers are very friendly and teach topics in-depth. Thanks to Zero2Infynite.",
  },
  {
    name: "Parameswaran S",
    stars: 5,
    review:
      "Had a quality training and get a carrier guidance. CEH helped me to improve my Security Analyst Skills.",
  },
  {
    name: "Narayanan Varadarajan",
    stars: 5,
    review:
      "Very awesome and great teaching. I took Ethical hacking course under the guidance of Pradhan sirand gained a lot of knowledge that what i knew. They provide professional teaching with practical sessions where we learn a lot. It worth more that what it seems.",
  },
  {
    name: "abhishek gattani",
    stars: 5,
    review:
      "1. We have received external trainer with hands on experience in SAST. 2. Pradhan has conducted 3 doubt clearing session. 3. Though it was SAST he has covered a dedicated session for DAST to gain background of ethical hacking. 4. Overall training was well planned and organized. 5. He has shared prerequisite before starting the course overall it was wonderful experience. 6. I recommend zero2infynite for any cyber security courses due to dedication and commitment they provide for there's clients.",
  },
  {
    name: "krishna prasad",
    stars: 5,
    review:
      "Took my CEH practicals certification. The trainer is knowledgeable and friendly. They also have lab setup where you can learn with real-world scenarios. One of the best institute.",
  },
  {
    name: "vasishta JAVA",
    stars: 5,
    review:
      "Workshop was amazing, the doubt session was excellent, the trainers helped me a lot to improve my skills - St. Joseph's College Of Engineering",
  },
  {
    name: "Gajendran B",
    stars: 5,
    review:
      "Very Good Class for CEH, Those who want to learn about CEH very good training center. Pradhan Sir explained concepts very well.",
  },
  {
    name: "Ram Kumar",
    stars: 5,
    review:
      "Best place for Final year project and placement training. Last minute to crack the Interview. Finally I got a satisfied job in cyber security",
  },
  {
    name: "A Balanithya",
    stars: 5,
    review:
      "I done my final year project in this center. This institute is a good platform to learn a new things based on technology sides so i complete a СЕН course in this center and here they gives the training for the placement. After I trained they placed me in a EY company.",
  },
  {
    name: "Sathya Prakash",
    stars: 5,
    review:
      "Me and my friend completed our CEH Cource in Zero2 infynite. We learn lot from Here. Mentors and Students are very friendly type and they put full effort to me and my friend to place in Top companies. Now we both are placed in a top MNC company (EY)as a intern.It a wonderful platform for other department students and working professionals to enter in cyber security field",
  },
  {
    name: "Sanjana Nashi",
    stars: 5,
    review:
      "It was a great session and I learnt many basic things about ethical hacking. It is very good field to study",
  },
  {
    name: "Nischitha Nischitha",
    stars: 5,
    review:
      "Just completed the course, the trainer taught us so well, he will answer to all the queries. Good to be a part of this institution.",
  },
  {
    name: "Raghavendra N",
    stars: 5,
    review:
      "It was a great learning experience, and I have learned many things about ethical hacking from the basics. The teaching method is very practical; all the labs were explained clearly by the trainer. All the resources provided were also very helpful. where we can get to know many technical things, from basic to advanced.",
  },
];

// Function to render star rating
const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
      ★
    </span>
  ));
};

// Function to get user initials for avatar
const getUserInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const TextReviewsCardsSectionComp = () => {
  return (
    <div className="reviews-containe container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="review-card">
            <div className="review-content">
              {/* User Avatar */}
              <div className="user-avatar">{getUserInitials(review.name)}</div>

              {/* Review Content */}
              <div className="review-details">
                {/* User Name */}
                <div className="user-name">{review.name}</div>

                {/* Stars */}
                <div className="star-rating">{renderStars(review.stars)}</div>

                {/* Review Text */}
                <div className="review-text">{review.review}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextReviewsCardsSectionComp;
