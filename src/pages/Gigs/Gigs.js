import React from "react";
import { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/GigCard/GigCard";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

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
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu flex md:flex-1">
          <div className="left flex md:flex-1">
            <div>Budget</div>
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
            <button className="mr-3" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="right ">
            <span className="sortBy mx-1">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
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
