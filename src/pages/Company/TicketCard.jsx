import React, { useState } from "react";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import daewoo from "../../images/daewoo.jpg";
import { Link } from "react-router-dom";
import UpdateTicketForm from "../../components/UpdateTicketForm";
import { del } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const TicketCard = ({
  departurePlace,
  arrivalPlace,
  arrivalDate,
  departureDate,
  noOfTickets,
  ticketType,
  price,
  description,
  setAllTickets,
  _id,
}) => {
  const user = useSelector((state) => state.Auth.user);
  const companyId = user._id;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleTicketDelete = async () => {
    try {
      const response = await del(`/api/company/ticket/${_id}/${companyId}`);
      if (response.status === 200) {
        console.log(response.data)
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
          className={`p-2 ${
            user === "user" ? "bg-[#03305b]" : "bg-[#0e1f33]"
          } rounded-b-lg min-h-[150px] `}
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
          {user.role === "company" ? (
            <div className="flex justify-end absolute bottom-2 right-2 ">
              <a
                href="#"
                onClick={openModal}
                className="inline-flex mr-2 items-center px-2 py-1 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-[#0c101b] hover:text-white transition transition-duration-800 focus:ring-2 focus:outline-none dark:bg-[#FE8701] dark:hover:bg-[#FE8701] dark:focus:ring-[#FE8701]"
              >
                Update
              </a>
              <a
                onClick={handleTicketDelete}
                className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Delete
              </a>
            </div>
          ) : user.role === "admin" ? (
            <a
              href="#"
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </a>
          ) : user.role === "user" ? (
            <Link
              to={`ticket-details/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border text-white rounded-lg hover:bg-[#152831] focus:ring-2 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Book me
            </Link>
          ) : null}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          closeModel={setIsModalOpen}
          form={<UpdateTicketForm id={_id} setAllTickets={setAllTickets} />}
          text="Add ticket from here"
        />
      )}
    </>
  );
};

export default TicketCard;
