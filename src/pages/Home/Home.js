import React from "react";
import Hero from "../../components/Hero/Hero";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { projects } from "../../data";
import CatCard from "../../components/CatCard/CatCard";
import "./Home.scss";
import Features from "../../components/Features/Features";
import Explore from "../../components/Explore/Explore";
import FeaturesDark from "../../components/FeaturesDark/FeaturesDark";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SlideForProjectCard from "../../components/SlideForProjectCard/SlideForProjectCard";
import { useState } from "react";
import { useEffect } from "react";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [cats, setCats] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    newRequest
      .get(`/cats`)
      .then((res) => {
        setCats(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [cats]);
  return (
    <div className="home">
      <Hero />
      <TrustedBy />
      <Slide>
        {cats.map((cat) => (
          <CatCard key={cat._id} cat={cat} />
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
