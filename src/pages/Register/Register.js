import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
import Spinner from "../../components/Spinner/Spinner";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    desc: "",
    isSeller: false,
  });
  const [isPending, setIsPending] = useState(false);

  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prevState) => {
      return { ...prevState, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const url = await upload(file);
    try {
      await newRequest
        .post("/auth/register", {
          ...user,
          img: url,
        })
        .then(() => {
          setIsPending(false);
        });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900 md:py-60">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-medium text-slate-700 ">
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => handleChange(e)}
                  pattern="\w{3,16}"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                  placeholder="Strong Password (Ab#12345)"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-700"
                >
                  Profile Image
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="country"
                  required
                />
              </div>
              <div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => handleSeller(e)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-slate-700 dark:text-gray-300">
                    Activate the seler account
                  </span>
                </label>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="01060578105"
                  pattern="^01[0125][0-9]{8}$"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="desc"
                  id="description"
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="A short description about you"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-slate-100 bg-emerald-700	hover:bg-emerald-600 focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register Now
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
