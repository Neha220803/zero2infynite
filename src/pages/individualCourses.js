import React from "react";
import IndiCoureBasicInfo from "../sections/individual-courses/overview/indi-coure-basic-info";
import IndiCourseTableComp from "../sections/individual-courses/upcoming-batches/indi-course-table";
import NavSecondary from "../components/nav/secondaryNav";
import IndiCopurseFAQ from "../sections/individual-courses/faq/IndiCopurseFAQ";
import IndiCorseSylabusComp from "../sections/individual-courses/syllabus/indiCorseSylabus";
import TrainerProfileComp from "../sections/individual-courses/trainer/TrainerProfile";
import CertificationsComp from "../sections/individual-courses/certifications/Certifications";
import OpportunityComp from "../sections/individual-courses/opportunity/opportunity";

const IndividualCourses = () => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center py-2 gap-5">
      <IndiCoureBasicInfo />
      <NavSecondary />
      <IndiCourseTableComp />
      <IndiCorseSylabusComp />
      <TrainerProfileComp />
      <CertificationsComp />
      <OpportunityComp />
      <IndiCopurseFAQ />
    </div>
  );
};

export default IndividualCourses;
