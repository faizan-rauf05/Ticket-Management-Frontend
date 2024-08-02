import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Blog = () => {
  const [file, setFile] = useState("");
  const [blogData, setBlogData] = useState({
    title: "",
    city: "",
    blog: "",
  });

  // Input Blog Data
  const handleInputData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", blogData.title);
    formData.append("city", blogData.city);
    formData.append("blog", blogData.blog);
    const response = await axios.post(
      // "http://localhost:3000/api/user/blog",
      "https://ticketwhiz.netlify.app/api/user/blog",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if(response.status == 200){
      toast.success(response.data.message);
      setBlogData({
        title:"",
        city:"",
        blog:"",
      });
      setFile("");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full bg-transparent p-4 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-3xl text-white text-center mb-8">
            Write Blog Here
          </h2>
          <form className="max-w-3xl mx-auto" onSubmit={handleInputData}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="title"
                id="title"
                value={blogData.title}
                onChange={(e) => {
                  setBlogData({
                    ...blogData,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="title"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                id="city"
                value={blogData.city}
                onChange={(e) => {
                  setBlogData({
                    ...blogData,
                    [e.target.name]: e.target.value,
                  });
                }}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
            <label
              className="block mb-2 text-sm font-medium bg-transparent text-white dark:text-white"
              for="file_input"
            >
              Choose file
            </label>
            <input
              className="block mb-4 w-full text-sm text-white border border-gray-300 rounded-lg cursor-pointer bg-transparent dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
            />
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Blog
            </label>
            <textarea
              id="message"
              rows="4"
              name="blog"
              value={blogData.blog}
              onChange={(e) => {
                setBlogData({
                  ...blogData,
                  [e.target.name]: e.target.value,
                });
              }}
              className="block p-2.5 w-full text-sm text-white focus:outline-none bg-transparent rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your blog here..."
            ></textarea>

            <button
              type="submit"
              className="text-white bg-[#0d1f33] mt-4 hover:bg-[#09131f] focus:ring-4 focus:outline-none focus:ring-[#0d1f33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;
