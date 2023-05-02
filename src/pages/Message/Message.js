import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";
const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
  return (
    <div className="message mt-9 pt-14">
      <div className="container h-screen">
        <span className="">
          <Link
            className="text-blue-600 hover:text-blue-700 text-lg underline"
            to="/messages"
          >
            Messages
          </Link>
        </span>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          "error"
        ) : (
          <div>
            <div className="messages">
              {data.map((msg) => (
                <div
                  className={
                    msg.userId === currentUser._id ? "item" : "owner item"
                  }
                  key={msg._id}
                >
                  <p className="">{msg.desc}</p>
                  <span className="block text-gray-300 text-xs mt-1">
                    {moment(msg.createdAt).fromNow()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="bg-gray-300 p-4 flex">
            <textarea
              className=" flex items-center h-24 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
            />
            <button
              type="submit"
              className="ml-3 my-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;
