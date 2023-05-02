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
          <h2 className="text-slate-700 text-md py-0 my-0">{item.title}</h2>
          <h3 className="text-slate-700 truncate  max-h-20 	text-sm">
            {item.shortDesc}
          </h3>
        </div>
        <hr className="mt-3" />
        <div className="leading-8 detail pt-2 px-3">
          <div className="flex">
            <img src="../img/star.png" className="mt-2 mr-1" alt="" />
            <span className="text-yellow-500">
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
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
