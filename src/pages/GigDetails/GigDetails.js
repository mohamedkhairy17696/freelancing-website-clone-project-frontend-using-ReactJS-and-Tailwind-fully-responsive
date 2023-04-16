import React, { useEffect, useState } from "react";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
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
              <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
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
                className="w-96 mt-8	text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
              src={userData.img}
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
                <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
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

        <div className="reviews">
          <h2 className="text-2xl font-medium	 mt-20 mb-8">Reviews</h2>
          <div className="review">
            <div className="flex">
              <img
                class="w-14 h-14 rounded-full"
                src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
              <div className="ml-2">
                <p className="text-md font-medium	">Mohamed</p>
                <div className="flex">
                  <img
                    className="w-6 mr-2 rounded"
                    src="https://www.sitographics.com/enciclog/banderas/africa/image_2012/Egipto.gif"
                    alt=""
                  />
                  <span>Egypt</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="lg:w-1/2 mr-12 my-8">
              I am very happy with the service I received. The artist was great
              at deciphering what I was looking for and made that come to life
              in a way that encapsulated my vision for my business. I really
              appreciate the way he took what was in my head and brought it into
              the world. Amazing communication too. Literally next day if not
              sooner. I really like the logo done too.
            </p>
            <div className="helpful flex">
              <span className="mr-2 text-lg">Helpful?</span>
              <img className="w-4 mr-2" src="/img/like.png" alt="" />
              <span className="mr-2 text-lg">Yes</span>
              <img className="w-4 mr-2" src="/img/dislike.png" alt="" />
              <span className="text-lg">No</span>
            </div>
          </div>
          <hr className="my-6" />
          <div className="review">
            <div className="flex">
              <img
                class="w-14 h-14 rounded-full"
                src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
              <div className="ml-2">
                <p className="text-md font-medium	">Mohamed</p>
                <div className="flex">
                  <img
                    className="w-6 mr-2 rounded"
                    src="https://www.sitographics.com/enciclog/banderas/africa/image_2012/Egipto.gif"
                    alt=""
                  />
                  <span>Egypt</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="lg:w-1/2 mr-12 my-8">
              I am very happy with the service I received. The artist was great
              at deciphering what I was looking for and made that come to life
              in a way that encapsulated my vision for my business. I really
              appreciate the way he took what was in my head and brought it into
              the world. Amazing communication too. Literally next day if not
              sooner. I really like the logo done too.
            </p>
            <div className="helpful flex">
              <span className="mr-2 text-lg">Helpful?</span>
              <img className="w-4 mr-2" src="/img/like.png" alt="" />
              <span className="mr-2 text-lg">Yes</span>
              <img className="w-4 mr-2" src="/img/dislike.png" alt="" />
              <span className="text-lg">No</span>
            </div>
          </div>
          <hr className="my-6" />
          <div className="review">
            <div className="flex">
              <img
                class="w-14 h-14 rounded-full"
                src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
              <div className="ml-2">
                <p className="text-md font-medium	">Mohamed</p>
                <div className="flex">
                  <img
                    className="w-6 mr-2 rounded"
                    src="https://www.sitographics.com/enciclog/banderas/africa/image_2012/Egipto.gif"
                    alt=""
                  />
                  <span>Egypt</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <p className="lg:w-1/2 mr-12 my-8">
              I am very happy with the service I received. The artist was great
              at deciphering what I was looking for and made that come to life
              in a way that encapsulated my vision for my business. I really
              appreciate the way he took what was in my head and brought it into
              the world. Amazing communication too. Literally next day if not
              sooner. I really like the logo done too.
            </p>
            <div className="helpful flex">
              <span className="mr-2 text-lg">Helpful?</span>
              <img className="w-4 mr-2" src="/img/like.png" alt="" />
              <span className="mr-2 text-lg">Yes</span>
              <img className="w-4 mr-2" src="/img/dislike.png" alt="" />
              <span className="text-lg">No</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
