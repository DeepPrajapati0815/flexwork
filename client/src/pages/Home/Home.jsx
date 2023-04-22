import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeFeature from "../../components/HomeFeature/HomeFeature";
import HomeService from "../../components/HomeService/HomeService";
import HomeClientTestimonial from "../../components/HomeClientTestimonial/HomeClientTestimonial";
import HomeGreateWork from "../../components/HomeGreatWork/HomeGreatWork";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeFeature />
      <HomeService />
      <HomeClientTestimonial />
      <HomeGreateWork />
    </>
  );
};

export default Home;
