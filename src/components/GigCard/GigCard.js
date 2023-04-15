import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";
import { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const GigCard = ({ item }) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/users/${item.userId}`)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [item.userId]);
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard ">
        <img src={item.cover} alt="" />
        <div className="info">
          {isPending ? (
            <Spinner />
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <h2 className="text-black text-md">{item.desc}</h2>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
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
