import React, { useEffect, useState } from "react";
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
    <div className="my-20 mx-3">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Orders</h1>
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
            {
              <th scope="col" className="px-6 py-3">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
            }
            <th scope="col" className="px-6 py-3">
              Contact
            </th>
          </tr>

          {isPending && <Spinner />}
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="px-6 py-4">
                <img className="w-16" src={order.img} alt="" />
              </td>
              <td className="px-6 py-4">{order.title}</td>
              <td className="px-6 py-4">{order.price}</td>
              <td className="px-6 py-4">wait wait ...</td>
              <td className="px-6 py-4">
                <img className="w-8" src="./img/message.png" alt="" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
