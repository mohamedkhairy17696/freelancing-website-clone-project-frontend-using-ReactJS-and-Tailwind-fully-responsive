import React from "react";

const FeaturesDark = () => {
  return (
    <div className="bg-indigo-950">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-20 py-20 justify-center items-center">
        <div className="item">
          <h1 className="text-3xl font-md mb-3 text-slate-50">
            Freelancer business.
            <span class="ml-2 font-semibold bg-indigo-800 text-slate-50 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-yellow-300 border border-indigo-800">
              New
            </span>
          </h1>
          <h1 className="text-2xl font-md mb-3 text-slate-50">
            A business solution designed for <i>teams</i>
          </h1>
          <p className="text-white font-md text-xl mt-10 mb-8">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="flex text-slate-50 mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Connect to freelancers with proven business experience
          </div>

          <div className="flex text-slate-50	 mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="flex text-slate-50	 mb-3">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button class="bg-emerald-500 hover:bg-emerald-600 text-slate-50 font-md py-2 px-4 rounded my-5">
            Explore Freelancer Business
          </button>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesDark;
