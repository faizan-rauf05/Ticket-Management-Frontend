import React from "react";
import PurchasedTicketCard from "./PurchasedTicketCard";

const PurchasedTickets = () => {
  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-center mt-2 text-3xl text-white font-semiBold ">
        Purchased Tickets
      </h2>
      <div className="w-full container px-5 py-14 mx-auto">
        <PurchasedTicketCard />
      </div>
    </section>
  );
};

export default PurchasedTickets;
