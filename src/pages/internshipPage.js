import React from "react";
import InternshipHeaderComp from "../sections/internship/header";
import WhyInternAtZ2IComp from "../sections/internship/whyInternSection/WhyIntern";
import InternTestimonialComp from "../sections/internship/testimonial/InternTestimonial";
import CyberInternshipComp from "../sections/internship/availableInternship/cyberInternship";
import ProgramFeaturesComp from "../sections/internship/availableInternship/programFeatures";
import ContentFooterComp from "../components/footer/contentFooter";

const InternshipPage = () => {
  return (
    <>
      <InternshipHeaderComp />
      <WhyInternAtZ2IComp />
      <InternTestimonialComp />
      <CyberInternshipComp />
      <ProgramFeaturesComp />
      <ContentFooterComp />
    </>
  );
};

export default InternshipPage;
