import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import newRequest from "../../utils/newRequest";
import Spinner from "../Spinner/Spinner";

const Reviews = ({ gigId }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/reviews/${gigId}`)
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
  }, [data, gigId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { gigId, desc, star };
    console.log(review);
    setIsPending(true);
    newRequest
      .post("/reviews", review, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      })
      .then(() => {
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className="reviews">
      <h2 className="text-2xl font-medium	 mt-20 mb-8">Reviews</h2>
      {data &&
        data.map((review) => (
          <div>
            <Review key={review._id} review={review} />
            <hr className="my-6" />{" "}
          </div>
        ))}
      {!currentUser?.isSeller && (
        <form
          className="sm:w-10/12 md:w-4/5 lg:w-3/5 mr-16"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-6">
            <textarea
              id="message"
              value={desc}
              zonChange={(e) => setDesc(e.target.value)}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Your opinion"
            ></textarea>
          </div>
          <select
            value={star}
            onChange={(e) => setStar(e.target.value)}
            id=""
            className="w-1/5 mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-600 dark:focus:border-emerald-600"
          >
            <option selected>Choose N.of stars</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button
            type="submit"
            class="text-white text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Reviews;
