import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
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
    <div className="myGigs mx-3">
      <div className="container">
        <div className="title">
          <h1 className="text-xl font-bold">
            {currentUser.isSeller ? "My Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {isPending && <Spinner />}
          {gigs.map((gig) => (
            <tr key={gig._id}>
              <td>
                <img className="image" src={gig.cover} alt="" />
              </td>
              <td>{gig.title}</td>
              <td>{gig.price}</td>
              <td>{gig.sales}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(gig._id)}
                  class="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-1 mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
