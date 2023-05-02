import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get("/conversations")
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [data]);

  const handleRead = (id) => {
    setIsPending(true);
    newRequest
      .put(`/conversations/${id}`, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      })
      .then(() => {
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  };

  return (
    <div className="my-20 mx-6 lg:mx-12 pt-14">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-slate-700">Messages</h1>
      </div>
      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Last Message
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
          {data.map((conv) => (
            <tr
              className={
                ((currentUser.isSeller && !conv.readBySeller) ||
                  (!currentUser.isSeller && !conv.readByBuyer)) &&
                "bg-emerald-50"
              }
              key={conv.id}
            >
              <td className="px-6 py-4">
                <Link
                  to={`/message/${conv.id}`}
                  className="text-blue-500	hover:text-blue-600	underline"
                >
                  {conv?.lastMessage?.substring(0, 100)}...
                </Link>
              </td>
              <td className="px-6 py-4">{moment(conv.updatedAt).fromNow()}</td>
              <td className="px-6 py-4">
                {(currentUser.isSeller && !conv.readBySeller) ||
                (!currentUser.isSeller && !conv.readByBuyer) ? (
                  <button
                    class="text-white text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={() => handleRead(conv.id)}
                  >
                    Mark as Read
                  </button>
                ) : (
                  <div>Read Message</div>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Messages;
