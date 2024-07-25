import React from "react";

const ButtonsModal = () => {
  return (
    <>
      <div className="flex justify-center py-4 gap-4">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-[0.8rem] font-medium border text-center text-white rounded-lg hover:bg-[#152831] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay Now
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-[0.8rem] font-medium border text-center text-white rounded-lg hover:bg-[#152831] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Check weather
        </a>
      </div>
    </>
  );
};

export default ButtonsModal;
