import React, { useEffect, useState } from "react";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import Reviews from "../../components/Reviews/Reviews";
const Gig = () => {
  const { id } = useParams();
  const [gig, setGig] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/gigs/single/${id}`)
      .then((res) => {
        setGig(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [id]); //  on send url dependency useEffect will render dom iitially

  const userId = gig?.userId;
  useEffect(() => {
    newRequest
      .get(`/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [userId]);

  return (
    <div className="gig">
      {isPending && <Spinner />}

      <div className="container mx-6 my-6 lg:mx-20 lg:my-20">
        <p className="text-lg font-semibold mb-5">
          Frellancer / Graphics & Design
        </p>
        <h1 className="text-2xlg mb-2">{gig.title}</h1>
        <div className="flex mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src={userData.img}
            alt="Rounded avatar"
          />
          <p className="mt-2.5 mx-3">{userData.username}</p>
          {!isNaN(gig.totalStars / gig.starNumber) && (
            <div className="flex items-center">
              {Array(Math.round(gig.totalStars / gig.starNumber))
                .fill()
                .map((item, i) => (
                  <img
                    className="w-4 m-0.5"
                    src="/img/star.png"
                    alt=""
                    key={i}
                  />
                ))}
              <span className="text-amber-400	">
                {Math.round(gig.totalStars / gig.starNumber)}
              </span>
            </div>
          )}
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 justify-center	items-center">
          <div className="mt-12 mr-12">
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              <img className="rounded" src={gig.imageSlide1} alt="" />
              <img className="rounded" src={gig.imageSlide2} alt="" />
              <img className="rounded" src={gig.imageSlide3} alt="" />
            </Slider>
            <h2 className="text-2xl font-medium	 mt-6">About This Gig</h2>
            <p className="mt-3">{gig.desc}</p>
          </div>
          <div className=" items-start content-start">
            <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between">
                <h3>{gig.shortTitle}</h3>
                <h2 className="text-slate-500">$ {gig.price}</h2>
              </div>
              <p className="mt-8 text-slate-500">{gig.shortDesc}</p>
              <div className="flex justify-between my-8">
                <div className="flex">
                  <img className="w-4 mr-2" src="/img/clock.png" alt="" />
                  <span className="mb-1">{gig.deliveryTime} Days Delivery</span>
                </div>
                <div className="flex">
                  <img className="w-4 mr-2" src="/img/recycle.png" alt="" />
                  <span className="mb-1">{gig.revisionNumber} Revisions</span>
                </div>
              </div>
              <div className="features">
                <div className="flex mb-1">
                  <img className="w-4 mr-2" src="/img/greencheck.png" alt="" />
                  <span>{gig.feature1}</span>
                </div>
                <div className="flex mb-1">
                  <img className="w-4 mr-2" src="/img/greencheck.png" alt="" />
                  <span>{gig.feature2}</span>
                </div>
                <div className="flex mb-1">
                  <img className="w-4 mr-2" src="/img/greencheck.png" alt="" />
                  <span>{gig.feature3}</span>
                </div>
                <div className="flex mb-1">
                  <img className="w-4 mr-2" src="/img/greencheck.png" alt="" />
                  <span>{gig.feature4}</span>
                </div>
              </div>

              <button
                type="button"
                className="w-96 mt-8 text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-medium	">About The Seller</h2>
          <div className="flex mt-5">
            <img
              className="w-20 h-20 rounded-full"
              src={userData.img || "/img/noavatar.jpg"}
              alt="Rounded avatar"
            />
            <p className="mt-7 mx-3">{userData.username}</p>
            {!isNaN(gig.totalStars / gig.starNumber) && (
              <div className="flex items-center">
                {Array(Math.round(gig.totalStars / gig.starNumber))
                  .fill()
                  .map((item, i) => (
                    <img
                      className="w-4 m-0.5"
                      src="/img/star.png"
                      alt=""
                      key={i}
                    />
                  ))}
                <span className="text-amber-400	">
                  {Math.round(gig.totalStars / gig.starNumber)}
                </span>
              </div>
            )}
          </div>
          <button class="ml-24 bg-transparent hover:bg-emerald-600	text-emerald-600 font-medium hover:text-white py-2 px-4 border border-emerald-600 hover:border-transparent rounded">
            Contact Me
          </button>
        </div>

        <div class="mt-8 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex justify-between">
              <div>
                <div className="my-3">
                  <p>From</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {userData.country}
                  </h3>
                </div>
                <div className="my-3">
                  <p>Member since</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {userData.createdAt}
                  </h3>
                </div>
                <div className="my-3">
                  <p>Languages</p>
                  <h3 className="mt-1 text-xl font-medium	">English</h3>
                </div>
              </div>
              <div>
                <div className="my-3">
                  <p>Avg. response time</p>
                  <h3 className="mt-1 text-xl font-medium	">4 Hours</h3>
                </div>
              </div>
            </div>
            <hr className="my-6" />
            {userData.desc && <p>{userData.desc}</p>}
          </div>
        </div>
        <Reviews gigId={id} />
      </div>
    </div>
  );
};

export default Gig;
