import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ cat }) => {
  const { catId } = useParams();

  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={cat.img} alt="" />
        <span className="desc">{cat.desc}</span>
        <span className="title">{cat.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
