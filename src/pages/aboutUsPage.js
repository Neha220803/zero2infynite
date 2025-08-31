import React from "react";
// import AboutUsPerks from "../sections/aboutUs/AboutUsPerks";
import AboutUsHeaderComp from "../sections/aboutUs/header/AboutUsHeader";
import AboutUSParaContentComp from "../sections/aboutUs/AboutUSParaContent/AboutUSParaContent";
import AboutUsBuildingComp from "../sections/aboutUs/AboutUsBuildingComp/AboutUsBuildingComp";
import AboutUsCTAPage from "../sections/aboutUs/CTAPage/AboutUsCTAPage";
import AboutUsFooterComp from "../sections/aboutUs/AboutUsFooter/AboutUsFooter";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsHeaderComp />
      {/* <AboutUsPerks /> */}
      <AboutUSParaContentComp />
      <AboutUsBuildingComp />
      <AboutUsCTAPage />
      <AboutUsFooterComp />
    </>
  );
};

export default AboutUsPage;
