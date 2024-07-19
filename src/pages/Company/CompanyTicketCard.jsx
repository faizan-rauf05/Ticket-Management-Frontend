import React, { useState } from "react";
import Modal from "../../components/Modal";
import AddTicketForm from "../../components/AddTicketForm";

const CompanyTicketCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div
        className="max-w-sm p-6 cursor-pointer hover:scale-110 transition-transform duration-300 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{
          background: "linear-gradient(90deg, rgba(216,217,161,1) 0%, rgba(255,149,0,1) 100%)"
        }}
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-white text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          onClick={openModal}
          className="inline-flex mr-2 items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-[#FE8701] focus:ring-4 focus:outline-none focus:ring-[#FE8701] dark:bg-[#FE8701] dark:hover:bg-[#FE8701] dark:focus:ring-[#FE8701]"
        >
          Update
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </a>
      </div>

      {isModalOpen && (
        <Modal closeModel={setIsModalOpen} form={<AddTicketForm />} />
      )}
    </>
  );
};

export default CompanyTicketCard;
