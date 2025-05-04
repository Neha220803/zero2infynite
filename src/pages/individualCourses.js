import React from "react";
import IndiCoureBasicInfo from "../sections/individual-courses/overview/indi-coure-basic-info";
import IndiCourseTableComp from "../sections/individual-courses/upcoming-batches/indi-course-table";
import NavSecondary from "../components/nav/secondaryNav";
import IndiCopurseFAQ from "../sections/individual-courses/faq/IndiCopurseFAQ";
import IndiCorseSylabusComp from "../sections/individual-courses/syllabus/indiCorseSylabus";

const IndividualCourses = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center py-5 gap-5">
      <IndiCoureBasicInfo />
      <NavSecondary />
      <IndiCourseTableComp />
      <IndiCorseSylabusComp />
      <IndiCopurseFAQ />
    </div>
  );
};

export default IndividualCourses;
