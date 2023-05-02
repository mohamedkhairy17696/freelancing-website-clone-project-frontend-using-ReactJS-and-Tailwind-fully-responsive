import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [orders, setOrders] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };
  return (
    <div className="my-20 mx-6 lg:mx-12 pt-14">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-slate-700">Orders</h1>
      </div>
      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg p-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead>
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
                Contact
              </th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="px-6 py-4">
                <img className="w-16 rounded" src={order.img} alt="" />
              </td>
              <td className="px-6 py-4">{order.title}</td>
              <td className="px-6 py-4">{order.price}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleContact(order)}
                  type="button"
                  className="text-white text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {currentUser.isSeller
                    ? "Contact With Buyer"
                    : "Contact With Seller"}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
