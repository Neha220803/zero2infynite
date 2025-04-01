import React from "react";
import HomeHeader from "../sections/home/header";
import PlacedStu from "../sections/home/placedstudents/placedstu";
import WhoWe from "../sections/home/whower/whowe";
import WhyUs from "../sections/home/whyus/whyus";

const Homepage = () => {
  return (
    <div>
      <HomeHeader />
      <PlacedStu />
      <WhoWe />
      <WhyUs />
    </div>
  );
};

export default Homepage;
