import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Gigs = () => {
  // const minRef = useRef();
  // const maxRef = useRef();
  // const [data, setData] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // const [sort, setSort] = useState("sales");
  // const [cat, setCat] = useState("");
  // const { search } = useLocation();
  // const { catTitle } = useParams();

  // useEffect(() => {
  //   newRequest
  //     .get(
  //       `/gigs/?{search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setIsPending(true);
  //       setError(err.message);
  //       console.log(err);
  //     });
  // }, [data, sort, search, cat]);

  // const reSort = (type) => {
  //   setSort(type);
  // };

  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  const apply = () => {
    refetch();
  };
  return (
    <div className="gigs mt-24">
      <div className="container mx-6 md:mx-12">
        <span className="text-slate-700 font-semibold">
          Explore Services That You Needed
        </span>
        <div className="menu flex md:flex-1">
          <div className="left flex md:flex-1">
            <div className="text-slate-700 font-medium">Budget</div>
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
              onClick={apply}
              type="submit"
              class="text-white text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Search
            </button>
          </div>
          <div className="block">
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
        {/*<div className="cards">
          {isPending && <Spinner />}
          {error && (
            <div>Something wrong in fetching data🧨🧨🧯🧯{error.message}</div>
          )}
          {data.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
          </div>*/}
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
