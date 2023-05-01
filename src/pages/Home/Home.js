import React from "react";
import Hero from "../../components/Hero/Hero";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import FeaturesDark from "../../components/FeaturesDark/FeaturesDark";
import { useState } from "react";
import { useEffect } from "react";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrustedBy />
      <Features />
      <Explore />
      <FeaturesDark />
    </div>
  );
};

export default Home;
