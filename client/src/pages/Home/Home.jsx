import React from "react";
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner";
import HomeFeature from "../../components/Home/HomeFeature/HomeFeature";
import HomeService from "../../components/Home/HomeService/HomeService";
import HomeClientTestimonial from "../../components/Home/HomeClientTestimonial/HomeClientTestimonial";
import HomeGreateWork from "../../components/Home/HomeGreatWork/HomeGreatWork";

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
