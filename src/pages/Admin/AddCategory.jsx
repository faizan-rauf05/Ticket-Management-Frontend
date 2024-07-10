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
    try {
      const request = await post("/api/admin/category", {
        categoryName,
        description,
      });
      const response = request.data;
      if(request.error == 400){
        toast.success(response.error);
      }else{
        setCategoryData({categoryName : "",description:"" });
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-full h-[100vh] flex justify-center items-center">
      <div className="w-full flex max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#" onSubmit={handleCreateCategory}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Fill this form to add new category
          </h5>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="This is train category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(e) =>
                setCategoryData({
                  ...categoryData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
