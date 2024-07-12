import React from "react";

const AvailableTicketsCard = () => {
  return (
    <>
      <div
        className="max-w-sm p-6 bg-white hover:scale-110 transition-transform duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,195,52,1) 0%, rgba(255,231,156,1) 100%)",
        }}
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="text-white" >Price : 1200 Rs</p>
        <p className="text-white">20 seats left</p>
        <a
          href="#"
          className="inline-flex mt-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buy now
        </a>
        
      </div>
    </>
  );
};

export default AvailableTicketsCard;
