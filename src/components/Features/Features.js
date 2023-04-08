import React from "react";
const Features = () => {
  return (
    <div className="bg-emerald-50">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-20 py-20 justify-center	items-center">
        <div className="">
          <h1 className="text-3xl font-bold mb-6 text-slate-700">
            A whole world of freelance talent at your fingertips
          </h1>
          <div className="flex font-bold text-slate-600 mb-2">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            The best for every budget
          </div>
          <p className="mb-5 text-gray-500">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
          <div className="flex font-bold text-slate-600 mb-2">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Quality work done quickly
          </div>
          <p className="mb-5 text-gray-500">
            Find the right freelancer to begin working on your project within
            minutes.
          </p>
          <div className="flex font-bold text-slate-600 mb-2">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            Protected payments, every time
          </div>
          <p className="mb-5 text-gray-500">
            Always know what you'll pay upfront. Your payment isn't released
            until you approve the work.
          </p>
          <div className="flex font-bold text-slate-600 mb-2">
            <img src="./img/check.png" alt="" className="mr-2 w-6" />
            24/7 support
          </div>
          <p className="mb-5 text-gray-500">
            Find high-quality services at every price point. No hourly rates,
            just project-based pricing.
          </p>
        </div>
        <div className="item">
          <video
            className="w-full text-center"
            autoplay
            muted
            controls
            src="./img/video.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
