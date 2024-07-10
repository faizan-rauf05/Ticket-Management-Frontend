import React from "react";
import CompanyTicketCard from "./CompanyTicketCard";

const AllTickets = () => {
  return (
    <div className="flex gap-[2rem] flex-wrap justify-center mt-[3rem]">
      <CompanyTicketCard />
      <CompanyTicketCard />
      <CompanyTicketCard />
      <CompanyTicketCard />
    </div>
  );
};

export default AllTickets;
