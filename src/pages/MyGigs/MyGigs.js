import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Spinner from "../../components/Spinner/Spinner";
const MyGigs = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [gigs, setGigs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/gigs?userId=${currentUser._id}`)
      .then((res) => {
        setGigs(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [gigs, currentUser._id]);

  const handleDelete = (id) => {
    newRequest.delete(`/gigs/${id}`).then(() => {});
  };

  return (
    <div className="my-20 mx-6 lg:mx-12">
      <div className="flex justify-between mb-8">
        <h1 className="text-xl font-bold">
          {currentUser.isSeller ? "My Gigs" : "Orders"}
        </h1>
        {currentUser.isSeller && (
          <Link to="/add">
            <button
              type="button"
              className="text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add New Gig
            </button>
          </Link>
        )}
      </div>
      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Sales
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
          {isPending && <Spinner />}
          {gigs.map((gig) => (
            <tr key={gig._id}>
              <td className="px-6 py-4">
                <img className="w-16 rounded" src={gig.cover} alt="" />
              </td>
              <td className="px-6 py-4">{gig.title}</td>
              <td className="px-6 py-4">{gig.price}</td>
              <td className="px-6 py-4">{gig.sales}</td>
              <td className="px-6 py-4">
                <a
                  href="/#"
                  onClick={() => handleDelete(gig._id)}
                  className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
              {/*<td>
                <button
                  type="button"
                  onClick={() => handleDelete(gig._id)}
                  class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-1 mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
          </td>*/}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
