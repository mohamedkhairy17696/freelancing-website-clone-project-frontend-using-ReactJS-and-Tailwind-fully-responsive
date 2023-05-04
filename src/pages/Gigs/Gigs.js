import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
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

  const reSort = (type) => {
    setSort(type);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  const apply = () => {
    refetch();
  };
  return (
    <div className="gigs mt-24 pt-5">
      <div className="container mx-6 md:mx-12">
        <span className="text-slate-700 text-2xl font-md">
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
              type="submit"
              className="text-white text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={apply}
            >
              Search
            </button>
          </div>
          <div className="block mt-3">
            <label
              htmlFor="filter"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sort by
            </label>
            <select
              id="filter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-700 dark:focus:border-emerald-700"
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
          {isLoading ? (
            <Spinner />
          ) : error ? (
            "Something wrong in feching data"
          ) : (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
