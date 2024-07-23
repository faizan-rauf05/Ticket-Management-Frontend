import React from "react";
import SearchBar from "../../components/SearchBar";
import AvailableTicketsCard from "../../components/AvailableTicketsCard";
import TicketCard from "../Company/TicketCard";

const AvailableTickets = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <SearchBar />
        <h2 className="text-center text-3xl text-white font-semiBold " >All Tickets</h2>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap gap-6 justify-center">
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
            <TicketCard/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailableTickets;
