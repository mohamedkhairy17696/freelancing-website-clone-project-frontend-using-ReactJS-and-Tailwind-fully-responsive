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
      <Features />
      <Explore />
      <FeaturesDark />
    </div>
  );
};

export default Home;
