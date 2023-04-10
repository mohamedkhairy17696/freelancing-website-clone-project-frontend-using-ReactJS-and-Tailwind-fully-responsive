import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="container">
      <div className="text-center my-6">
        <Link to="/messages" className="underline">
          Messages
        </Link>{" "}
        / Mohamed /
      </div>
      <div className="flex justify-center">
        <div class="h-96 flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Rounded avatar"
              />
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Rounded avatar"
              />
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Rounded avatar"
              />
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <img
                class="w-10 h-10 rounded-full"
                src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rounded avatar"
              />
            </div>
          </div>

          <div class="bg-gray-300 p-4 flex">
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
            />
            <button
              type="button"
              className="ml-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
