import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import newRequest from "../../utils/newRequest";
import Spinner from "../Spinner/Spinner";

const Review = ({ review }) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/users/${review.userId}`)
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
  }, [review.userId]);
  return (
    <div className="review">
      {isPending && <Spinner />}
      {error && (
        <div>Something wrong in fetching data🧨🧨🧯🧯{error.message}</div>
      )}
      <div className="flex">
        <img
          class="w-8 h-8 rounded-full"
          src={data.img || "/img/noavatar.jpg"}
          alt="Rounded avatar"
        />
        <div className="ml-3">
          <p className="text-sm font-medium	">{data.username}</p>
          <div className="flex">
            <span className="text-xs">{data.country}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img className="w-4 m-0.5" src="/img/star.png" alt="" key={i} />
          ))}
        <span className="text-amber-400">{review.star}</span>
      </div>
      <p className="lg:w-1/2 text-md mr-20 mb-8 mt-4">{review.desc}</p>
    </div>
  );
};

export default Review;
