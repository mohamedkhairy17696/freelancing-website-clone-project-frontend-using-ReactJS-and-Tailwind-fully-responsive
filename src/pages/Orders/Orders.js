import React, { useEffect, useState } from "react";
import "./Orders.scss";
import Spinner from "../../components/Spinner/Spinner";
import newRequest from "../../utils/newRequest";
const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [orders, setOrders] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newRequest
      .get(`/orders`)
      .then((res) => {
        setOrders(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(true);
        setError(err.message);
        console.log(err);
      });
  }, [orders]);
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1 className="text-xl font-bold">Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          {isPending && <Spinner />}
          {error && (
            <div>Something wrong in fetching data🧨🧨🧯🧯{error.message}</div>
          )}{" "}
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                <img className="image" src={order.img} alt="" />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>wait wait ...</td>
              <td>
                <img className="message" src="./img/message.png" alt="" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
