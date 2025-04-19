import React from "react";
import IndiCoureBasicInfo from "../sections/individual-courses/indi-coure-basic-info";
import IndiCourseTableComp from "../sections/individual-courses/indi-course-table";

const IndividualCourses = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center py-5 gap-5">
      <IndiCoureBasicInfo />
      <IndiCourseTableComp />
    </div>
  );
};

export default IndividualCourses;
