import React from "react";
import Hero from "../../components/Hero/Hero";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/CatCard/CatCard";
import "./Home.scss";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import FeaturesDark from "../../components/FeaturesDark/FeaturesDark";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SlideForProjectCard from "../../components/SlideForProjectCard/SlideForProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrustedBy />
      <Slide>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Features />
      <Explore />
      <FeaturesDark />
      <SlideForProjectCard slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </SlideForProjectCard>
    </div>
  );
};

export default Home;
