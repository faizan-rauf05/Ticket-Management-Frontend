import React from "react";
import faisalMasjid from "../../images/faisal-masjid.jpeg";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <Link to="single-blog" className="md:max-w-[200px] w-full bg-white shadow-inner transition-transform transform hover:-translate-y-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[180px] object-cover"
            src={faisalMasjid}
            alt=""
          />
        </a>
        <div className="p-2 bg-[#0e1f33] rounded-b-lg">
          <a href="#">
            <h5 className="mb-[4px] text-1xl font-bold tracking-tight text-white dark:text-white">
              Guide to Lahore
            </h5>
          </a>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            Lahore is a city of special foods
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
