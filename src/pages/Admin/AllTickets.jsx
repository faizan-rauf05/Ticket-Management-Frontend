import React from "react";
import TicketCard from "../Company/TicketCard";

const AllTickets = () => {
  return (
    <>
      <h2 className="font-semiBold text-3xl text-center mb-4 text-white">All Tickets</h2>
      <div className="max-w-[100%] flex gap-8 flex-wrap justify-center">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </>
  );
};

export default AllTickets;
