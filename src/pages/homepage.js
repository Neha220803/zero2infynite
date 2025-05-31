import React from "react";
import HomeHeader from "../sections/home/header";
import WhoWe from "../sections/home/who-are-we/whoAreWe";
import WhyUs from "../sections/home/whyus/whyus";
import PlacedStuScroll from "../sections/home/placed-students-scroll/placedStuScroll";
import TestimonialsSection from "../sections/home/testimonials/testimonials";
import ContactUsHomeComp from "../sections/home/contact-us/ContactUs";
import AboutCompanySection from "../sections/home/about-company/AboutCompany";
import TrendingCourses from "../sections/home/TrendingCourse/TrendingCourse";

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
      <ContactUsHomeComp />
    </div>
  );
};

export default Homepage;
