import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import { QueryClient, useMutation } from "@tanstack/react-query";

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

  // const mutation = useMutation({
  //   mutationFn: (id) => {
  //     return newRequest.put(`/conversations/${id}`);
  //   },
  //   onSuccess: () => {
  //     QueryClient.invalidateQueries(["conversations"]);
  //   },
  // });

  // const handleRead = (id) => {
  //   mutation.mutate(id);
  // };
  return (
    <div className="messages mx-3">
      <div className="container">
        <div className="title">
          <h1 className="text-xl font-bold">Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {data.map((c) => (
            <tr
              className={
                ((currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer)) &&
                "active"
              }
              key={c.id}
            >
              <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
              <td>
                <Link to={`/message/${c.id}`} className="link">
                  {c?.lastMessage?.substring(0, 100)}...
                </Link>
              </td>
              <td>{moment(c.updatedAt).fromNow()}</td>
              <td>
                {((currentUser.isSeller && !c.readBySeller) ||
                  (!currentUser.isSeller && !c.readByBuyer)) && (
                  <button onClick={() => handleRead(c.id)}>Mark as Read</button>
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
