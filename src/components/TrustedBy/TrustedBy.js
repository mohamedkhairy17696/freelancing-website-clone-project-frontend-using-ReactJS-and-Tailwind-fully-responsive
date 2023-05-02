import React from "react";

const TrustedBy = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 px-6 bg-slate-50">
      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt=""
        />{" "}
      </div>
      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
        />{" "}
      </div>

      <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
        />{" "}
      </div>

      <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
        />{" "}
      </div>

      <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default TrustedBy;
