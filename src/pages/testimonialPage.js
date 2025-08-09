import React from "react";
import TestimonialHeaderComp from "../sections/testimonial/header/TestimonialHeader";
import HearFromStudentsComp from "../sections/testimonial/hear-from-stu/HearFromStu";
import TextReviewsCardsSectionComp from "../sections/testimonial/text-reviews/TextReviews";

const TestimonialPage = () => {
  return (
    <>
      <TestimonialHeaderComp />
      <HearFromStudentsComp />
      <TextReviewsCardsSectionComp />
    </>
  );
};

export default TestimonialPage;
