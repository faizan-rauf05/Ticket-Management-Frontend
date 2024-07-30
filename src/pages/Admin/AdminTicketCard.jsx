import React, {useState} from "react";
import daewoo from "../../images/daewoo.jpg";
import { del } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AdminTicketCard = ({
  departurePlace,
  arrivalPlace,
  noOfTickets,
  price,
  description,
  setAllTickets,
  _id
}) => {

  const handleTicketDelete = async () => {
    try {
      const response = await del(`/api/admin/ticket/${_id}`);
      if (response.status === 200) {
        setAllTickets(response.data.remainingTickets);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Failed to delete the ticket");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="md:max-w-[210px] w-full bg-white shadow-inner transition-transform transform hover:-translate-y-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full object-cover"
            src={daewoo}
            alt=""
          />
        </a>
        <div
          className={
            "p-2 bg-[#03305b]  bg-[#0e1f33] rounded-b-lg min-h-[143px]"
          }
        >
          <a href="#">
            <h5 className="mb-[4px] text-1xl font-bold tracking-tight text-white dark:text-white">
              {departurePlace}-{arrivalPlace}
            </h5>
          </a>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            {description.slice(0, 50)}...
          </p>
          <div className="w-full flex justify-between">
            <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
              {noOfTickets} seats left
            </p>
            <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
              Price : {price}
            </p>
          </div>
          <a
            onClick={handleTicketDelete}
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminTicketCard;
