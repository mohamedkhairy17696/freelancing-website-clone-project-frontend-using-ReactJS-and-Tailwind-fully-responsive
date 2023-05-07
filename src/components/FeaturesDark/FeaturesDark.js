import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturesDark = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const getAllGigs = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="bg-slate-800		">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-6 md:mx-20 py-20 justify-center items-center">
        <div className="item">
          <h1 className="text-3xl text-slate-200 font-medium mb-3 text-slate-50">
            Freelancer business.
            <span class="ml-2 font-normal bg-indigo-800 text-slate-200 text-xs px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-yellow-300 border border-indigo-800">
              New
            </span>
          </h1>
          <h1 className="text-3xl font-normal mb-3 text-slate-200">
            A business solution designed for teams
          </h1>
          <p className="text-slate-200 text-2xl font-normal mt-10 mb-8">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="flex text-slate-200 font-light mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Connect to freelancers with proven business experience
          </div>

          <div className="flex text-slate-200	font-light mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="flex text-slate-200 font-light mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button
            onClick={() => getAllGigs()}
            type="button"
            className="mt-8 text-center focus:outline-none text-white bg-emerald-800 hover:bg-neutral-100 hover:text-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Explore All Services
          </button>
        </div>
        <div>
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesDark;
