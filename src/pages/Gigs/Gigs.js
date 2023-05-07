import React, { useEffect } from "react";
import { useRef } from "react";
import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Gigs = () => {
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}`
        )
        .then((res) => {
          return res.data;
        }),
  });

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
              className="text-slate-100 bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              onClick={apply}
            >
              Search
            </button>
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
