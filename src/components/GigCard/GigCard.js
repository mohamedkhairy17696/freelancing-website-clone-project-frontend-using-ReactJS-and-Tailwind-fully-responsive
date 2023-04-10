import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/1" className="link">
      <div className="gigCard ">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <h2 className="text-black text-md font-semibold">{item.desc}</h2>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail pt-1 px-3">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>Price</span>
            <h2 className="inline">
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
