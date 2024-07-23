import React, { useState } from "react";
import Modal from "./Modal";
import AddTicketForm from "./AddTicketForm";
import { useSelector } from "react-redux";
import daewoo from "../images/daewoo.jpg";

const Categories = ({data}) => {
  const user = useSelector((state) => state.Auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const openModal = () => {
    setCurrentCategory(data.categoryName);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="md:max-w-[210px] w-full transition-transform transform hover:-translate-y-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={daewoo}
            alt=""
          />
        </a>
        <div className="p-2 bg-[#13253a] rounded-b-lg">
          <a href="#">
            <h5 className="mb-[1px] text-[1.1rem] font-bold tracking-tight text-white dark:text-white">
             {data.categoryName}
            </h5>
          </a>
          <p className="mb-[3px] text-[.9rem] font-normal text-white dark:text-gray-400">
            {data.description} 
          </p>
          <a
          onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0d1f33] rounded-lg hover:bg-[#09131f] focus:ring-2 focus:outline-none focus:ring-[#0d1f33] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Ticket
          </a>
        </div>
      </div>

      {isModalOpen && (
        <Modal closeModel={setIsModalOpen} form={<AddTicketForm ticketType={currentCategory}  />} text="Add ticket from here" />
      )}
    </>
  );
};

export default Categories;
