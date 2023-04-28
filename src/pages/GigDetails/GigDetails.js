import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
import Reviews from "../../components/Reviews/Reviews";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import moment from "moment";
const Gig = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    <div className="gig pt-14">
      {isPending && <Spinner />}
      {error && <div>Something wrong in fetching data{error.message}</div>}
      <div className="container my-6 mx-6 md:mx-20 lg:my-20">
        <p className="text-lg font-semibold mb-5">{gig.cat}</p>
        <h1 className="text-xl font-medium text-slate-700 mb-2">{gig.title}</h1>
        <div className="flex mt-5 mb-5">
          <img
            className="w-12 h-12 rounded-full"
            src={userData.img || "/img/noavatar.jpg"}
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
          <div className="mt-0 mr-12">
            <Carousel showArrows={false} showStatus={false}>
              <div>
                <img className="rounded" src={gig.imageSlide1} alt="" />
              </div>
              <div>
                <img className="rounded" src={gig.imageSlide2} alt="" />
              </div>
              <div>
                <img className="rounded" src={gig.imageSlide3} alt="" />
              </div>
            </Carousel>
            <h2 className="text-2xl font-medium	 mt-12">About This Gig</h2>
            <p className="mt-3">{gig.desc}</p>
          </div>
          <div className="items-start content-start">
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
              {!currentUser?.isSeller && currentUser && (
                <Link to={`/pay/${id}`}>
                  <button
                    type="button"
                    className="w-96 mt-8 text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Continue
                  </button>
                </Link>
              )}
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
        </div>

        <div class="mt-8 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <div className="flex justify-between">
              <div>
                <div className="my-3">
                  <p>Seller Country</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {userData.country}
                  </h3>
                </div>
                <div className="my-3">
                  <p>Member Since</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {moment(userData.createdAt).fromNow()}
                  </h3>
                </div>
                <div className="my-3">
                  <p>Language</p>
                  <h3 className="mt-1 text-xl font-medium	">English</h3>
                </div>
              </div>
              <div>
                <div className="my-3">
                  <p>Delivery time</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {gig.deliveryTime} days
                  </h3>
                </div>
                <div className="my-3">
                  <p>Number Of Revisions</p>
                  <h3 className="mt-1 text-xl font-medium	">
                    {gig.revisionNumber} Times
                  </h3>
                </div>
              </div>
            </div>
            <hr className="my-6" />
            <p>{userData.desc}</p>
          </div>
        </div>
        <Reviews gigId={id} />
      </div>
    </div>
  );
};

export default Gig;
