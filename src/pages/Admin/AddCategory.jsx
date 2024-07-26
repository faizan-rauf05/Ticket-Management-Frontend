import React, { useState } from "react";
import { post } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AddCategory = () => {
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    description: "",
  });

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const { categoryName, description } = categoryData;
    console.log(description)
    try {
      const request = await post("/api/admin/category", {
        categoryName,
        description,
      });
      const response = request.data;
      if (request.error == 400) {
        toast.success(response.error);
      } else {
        setCategoryData({});
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-full min-h-[90vh] flex justify-center items-center">
      <div className="w-full backdrop-blur-sm bg-opacity-10 max-w-sm p-4 bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6 " action="#" onSubmit={handleCreateCategory}>
          <h5 className="text-lg text-center font-medium text-white dark:text-white">
            Fill this form to add new category
          </h5>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Category Name
            </label>
            <input
              type="textarea"
              name="categoryName"
              id="category"
              className=" bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-[#0d1f33] focus:outline-none focus:ring-[#0d1f33] dark:placeholder-gray-400 dark:text-white"
              placeholder="train"
              required
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              name="description"
              className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-[#0d1f33] focus:outline-none focus:border-[#0d1f33] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#13283f] hover:bg-[#0d1f33] focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
