import React from "react";
import SearchBar from "../../components/SearchBar";
import AvailableTicketsCard from "../../components/AvailableTicketsCard";

const AvailableTickets = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <SearchBar />
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 gap-6 justify-center">
            <AvailableTicketsCard/>
            <AvailableTicketsCard/>
            <AvailableTicketsCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailableTickets;
