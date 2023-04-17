import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const minRef = useRef();
  const maxRef = useRef();
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("sales");
  const { search } = useLocation();

  useEffect(() => {
    newRequest
      .get(
        `/gigs?{search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
      )
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
  }, [data, sort, search]);

  const reSort = (type) => {
    setSort(type);
  };

  const apply = () => {
    setData(data);
  };
  return (
    <div className="gigs">
      <div className="container mx-12">
        <span className="text-slate-800 font-semibold">Freelancer</span>
        <h1 className="font-bold">Services and Gigs</h1>
        <div className="text-slate-800">
          Explore the boundaries of art and technology with Fiverr's AI artists
        </div>
        <div className="menu flex md:flex-1">
          <div className="left flex md:flex-1">
            <div className="text-slate-800 font-bold">Budget</div>
            <input
              className="my-2 block"
              ref={minRef}
              type="number"
              placeholder="min"
            />
            <input
              className="my-2 block"
              ref={maxRef}
              type="number"
              placeholder="max"
            />
            <button
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-100 font-md py-2 px-4 rounded my-5"
              onClick={apply}
            >
              Apply
            </button>
          </div>
          <div className="right ">
            <label
              for="filter"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort by
            </label>
            <select
              id="filter"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-700 dark:focus:border-emerald-700"
            >
              <option value="bestSelling" onClick={() => reSort("sales")}>
                Best Selling
              </option>
              <option value="newest" onClick={() => reSort("createdAt")}>
                Newest
              </option>
              <option value="popular" onClick={() => reSort("sales")}>
                Popular
              </option>
            </select>
          </div>
        </div>
        <div className="cards">
          {isPending && <Spinner />}
          {error && (
            <div>Something wrong in fetching data🧨🧨🧯🧯{error.message}</div>
          )}
          {data.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
