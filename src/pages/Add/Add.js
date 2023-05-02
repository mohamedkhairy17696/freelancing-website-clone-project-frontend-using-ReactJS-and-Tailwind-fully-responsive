import React, { useState } from "react";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useReducer } from "react";
import { INITIAL_STATE, gigReducer } from "../../reducers/GigReducer";
const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [singleFile1, setSingleFile1] = useState(undefined);
  const [singleFile2, setSingleFile2] = useState(undefined);
  const [singleFile3, setSingleFile3] = useState(undefined);

  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);
      const imageSlide1 = await upload(singleFile1);
      const imageSlide2 = await upload(singleFile2);
      const imageSlide3 = await upload(singleFile3);

      setUploading(false);
      dispatch({
        type: "ADD_IMAGES",
        payload: { cover, imageSlide1, imageSlide2, imageSlide3 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/gigs", {
        ...state,
      });
      navigate("/mygigs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-20 mx-5 pt-14">
      <h1 className="text-2xl font-medium text-slate-700 text-center mb-3">
        Add New Gig
      </h1>
      <h2 className="text-2xl font-light text-slate-700 text-center mb-6">
        All Fields are Required
      </h2>
      <div className=" flex gap-3 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center mr-8 md:mr-0">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <div class="mb-6">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                name="cat"
                id="cat"
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a category</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Web Development">Web Development</option>{" "}
                <option value="Mobile Development">Mobile Development</option>
                <option value="Video Editting">Video Editting</option>
              </select>
            </div>
            <div className="max-w my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="mt-6">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-700"
                >
                  Cover Image (Required)
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="imageSlide1"
                >
                  Slide Image1 (Required)
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setSingleFile1(e.target.files[0])}
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="imageSlide2"
                >
                  Slide Image2 (Required)
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setSingleFile2(e.target.files[0])}
                  required
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mt-6">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="imageSlide3"
                >
                  Slide Image3 (Required)
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) => setSingleFile3(e.target.files[0])}
                  required
                  className="bg-gray-50 border border-gray-300 text-slate-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>{" "}
              <button
                className="mt-8	text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={handleUpload}
              >
                {uploading ? "uploading..." : "Upload Images"}
              </button>
            </div>
            <div className="mt-6">
              <label
                htmlFor="desc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="desc"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                name="desc"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <label
                htmlFor="shortTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Service Title
              </label>
              <input
                type="text"
                id="shortTitle"
                name="shortTitle"
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="shortDesc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Short Description
              </label>
              <textarea
                id="shortDesc"
                name="shortDesc"
                onChange={handleChange}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your description here..."
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <label
                htmlFor="deliveryTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Delivery Times (e.g.3days)
              </label>
              <input
                type="number"
                id="deliveryTime"
                name="deliveryTime"
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="revisionNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Revision Number
              </label>
              <input
                type="number"
                id="revisionNumber"
                name="revisionNumber"
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="features"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Service Features
              </label>
              <input
                type="text"
                id="features"
                name="feature1"
                onChange={handleChange}
                required
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="text"
                id="features"
                name="feature2"
                onChange={handleChange}
                required
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="text"
                id="features"
                name="feature3"
                onChange={handleChange}
                required
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="text"
                id="features"
                name="feature4"
                onChange={handleChange}
                required
                className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mt-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-8	text-center focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={(e) => handleSubmit(e)}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
