import React from "react";
import { useSelector } from "react-redux";
import daewoo from "../../images/daewoo.jpg";

const PurchasedTicketCard = () => {
  const user = useSelector((state) => state.Auth.user);

  return (
    <>
      <div className="md:max-w-[200px] bg-white hover:-translate-y-2 transition-transform transform rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={daewoo} alt="daewoo" />
        </a>
        <div className="p-2 bg-[#0e1f33] rounded-b-lg">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">
              Lahore-Islamabad
            </h5>
          </a>
          {user.role == "user" ? (
            <>
              <a className="inline-flex items-center px-2 py-1 text-[0.8rem] font-medium border text-center text-white rounded-lg hover:bg-[#152831] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Checkout
              </a>
              <a className="inline-flex ml-2 items-center px-2 py-1 text-[0.8rem] font-medium border text-center text-white rounded-lg hover:bg-[#152831] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cancel
              </a>
            </>
          ) : (
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-[0.8rem] font-medium text-center border text-white rounded-lg hover:bg-[#152831] focus:ring-1 focus:outline-none focus:ring-bg-[#0e1f33] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete Ticket
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default PurchasedTicketCard;
