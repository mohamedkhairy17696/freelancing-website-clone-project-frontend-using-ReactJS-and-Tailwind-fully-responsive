import React from "react";
import { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/GigCard/GigCard";

const Gigs = () => {
  const minRef = useRef();
  const maxRef = useRef();

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="container mx-12">
        <span className="text-slate-800 font-semibold">
          Freelancer / Graphics & Design{" "}
        </span>
        <h1 className="font-bold">AI Artists</h1>
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
              <option value="bestSelling">Best Selling</option>
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
