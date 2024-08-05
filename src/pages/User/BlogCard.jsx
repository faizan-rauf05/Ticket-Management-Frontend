import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, city, image, blog, _id }) => {
  return (
    <>
      <div className="md:max-w-[200px] w-full bg-white shadow-inner transition-transform transform hover:-translate-y-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[180px] object-cover"
            src={`${window.location.origin}/images/${image}`}
            alt=""
          />
        </a>
        <div className="p-2 bg-[#0e1f33] rounded-b-lg h-[100px] ">
          <Link to={`blog-details/${_id}`}>
            <h5 className="mb-[4px] text-1xl font-bold tracking-tight text-white dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            {blog.slice(0, 40)}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
