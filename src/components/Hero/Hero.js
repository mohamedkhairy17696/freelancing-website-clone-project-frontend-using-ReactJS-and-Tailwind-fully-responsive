import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div>
      <div className="px-6 py-12 md:px-12 bg-emerald-900 text-gray-800 text-center lg:text-left mt-20">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl text-slate-200 md:text-6xl xl:text-7xl font-light mb-12">
                Find the perfect freelance services for your business
              </h1>
              <div className="mb-3 xl:w-96">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                    type="text"
                    className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary focus:text-white focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search"
                    aria-label="text"
                    aria-describedby="button-addon1"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    className="relative bg-emerald-500 z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => handleSearch()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <span className="mb-2 text-white text-md font-medium	pr-2">
                  Categories:
                </span>
                <Link to={`/gigs?cat=Web Development`}>
                  <button className="mb-2 mr-2 py-1 bg-transparent hover:bg-white text-white text-xs font-md hover:text-black px-4 border border-white hover:border-transparent rounded-full">
                    Web Development
                  </button>
                </Link>
                <Link to={`/gigs?cat=Graphic Design`}>
                  <button className="mb-2 mr-2 py-1 bg-transparent hover:bg-white text-white text-xs font-md hover:text-black px-4 border border-white hover:border-transparent rounded-full">
                    Graphic Design
                  </button>
                </Link>
                <Link to={`/gigs?cat=Mobile Development`}>
                  <button className="mb-2 mr-2 py-1 bg-transparent hover:bg-white text-white text-xs font-md hover:text-black px-4 border border-white hover:border-transparent rounded-full">
                    Mobile Development
                  </button>
                </Link>
                <Link to={`/gigs?cat=Video Editting`}>
                  <button className="mb-2 mr-2 py-1 bg-transparent hover:bg-white text-white text-xs font-md hover:text-black px-4 border border-white hover:border-transparent rounded-full">
                    Video Editting
                  </button>
                </Link>
              </div>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                src="./img/man.png"
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
