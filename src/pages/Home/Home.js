import React from "react";
import Hero from "../../components/Hero/Hero";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import FeaturesDark from "../../components/FeaturesDark/FeaturesDark";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="" dir={i18n.language === "ar" && "rtl"}>
      <Hero />
      <TrustedBy />
      <Features />
      <Explore />
      <FeaturesDark />
    </div>
  );
};

export default Home;
