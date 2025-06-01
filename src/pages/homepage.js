import React from "react";
import HomeHeader from "../sections/home/header";
import WhoWe from "../sections/home/who-are-we/whoAreWe";
import WhyUs from "../sections/home/whyus/whyus";
import PlacedStuScroll from "../sections/home/placed-students-scroll/placedStuScroll";
import TestimonialsSection from "../sections/home/testimonials/testimonials";
import ContactUsHomeComp from "../sections/home/contact-us/ContactUs";
import AboutCompanySection from "../sections/home/about-company/AboutCompany";
import TrendingCourses from "../sections/home/TrendingCourse/TrendingCourse";
import CyberDiploma from "../sections/home/diploma/cyber_diploma";
import HorizonhtalTestimonial from "../sections/home/new-testimonial/HorizonhtalTestimonial";

const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      {/* <PlacedStuScroll /> */}
      <AboutCompanySection />
      <TrendingCourses />
      <WhoWe />
      <WhyUs />

      <TestimonialsSection />
      {/* <HorizonhtalTestimonial /> */}
      <CyberDiploma />
      <ContactUsHomeComp />
    </div>
  );
};

export default Homepage;
