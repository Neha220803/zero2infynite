import React from "react";
import AboutUsPerks from "../sections/aboutUs/AboutUsPerks";
import AboutUsHeaderComp from "../sections/aboutUs/header/AboutUsHeader";
import AboutUSParaContentComp from "../sections/aboutUs/AboutUSParaContent/AboutUSParaContent";
import AboutUsBuildingComp from "../sections/aboutUs/AboutUsBuildingComp/AboutUsBuildingComp";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHeaderComp />
      {/* <AboutUsPerks /> */}
      <AboutUSParaContentComp />
      <AboutUsBuildingComp />
    </div>
  );
};

export default AboutUsPage;
