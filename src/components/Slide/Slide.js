import React from "react";
import "./Slide.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slide block justify-center">
      <div className="container">
        <Carousel responsive={responsive}>{children}</Carousel>
      </div>
    </div>
  );
};

export default Slide;
