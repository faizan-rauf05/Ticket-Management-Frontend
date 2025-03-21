import React, { useState } from "react";

const StarRating = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <>
      <div className="text-center py-8 ">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          onClick={handleDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Rating
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdown && (
          <div
            id="dropdown"
            className="z-10 mx-auto mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  onClick={handleDropdown}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  1 Star
                </a>
              </li>
              <li>
                <a
                  onClick={handleDropdown}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  2 Star
                </a>
              </li>
              <li>
                <a
                  onClick={handleDropdown}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  3 Star
                </a>
              </li>
              <li>
                <a
                  onClick={handleDropdown}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  4 Star
                </a>
              </li>
              <li>
                <a
                  onClick={handleDropdown}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  5 Star
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default StarRating;
