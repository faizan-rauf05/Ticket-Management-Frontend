import React, { useState } from "react";
import Modal from "./Modal";
import AddTicketForm from "./AddTicketForm";

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-[250px] p-6 bg-white cursor-pointer hover:scale-110 transition-transform duration-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[160px] grow-1" style={{background: 'linear-gradient(90deg, rgba(219,255,195,1) 0%, rgba(94,216,255,1) 100%)'}}>
        <a href="#">
          <h5
            onClick={openModal}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
           Bus
          </h5>
        </a>
        <p>Bus is a relaiable way of transport</p>
        <a
          href="#"
          className="inline-flex items-center my-2 px-2 py-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </a>
      </div>

    {isModalOpen && <Modal closeModel={setIsModalOpen} form={<AddTicketForm/>} />}
    </>
  );
};

export default Categories;
