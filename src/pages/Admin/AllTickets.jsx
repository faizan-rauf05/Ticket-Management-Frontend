import React, { useEffect, useState } from "react";
import TicketCard from "../Company/TicketCard";
import { get } from "../../services/apiEndpoint";
import AdminTicketCard from "./AdminTicketCard";

const AllTickets = () => {
  const [ticketsData, setAllTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await get(`/api/admin/tickets`);
        if (response.status == 200) {
          setAllTickets(response.data);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTickets();
  }, []);

  if (!ticketsData || ticketsData.length == 0) {
    return (
      <>
        <h2 className="text-center font-semiBold text-3xl text-white">
          All Tickets
        </h2>
        <h2 className="text-white">No any ticket availabe</h2>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center font-semiBold text-3xl text-white">
        All Tickets
      </h2>
      <div className="max-w-[100%] flex gap-8 flex-wrap px-4 ">
        {ticketsData?.map((currData) => {
          return (
            <AdminTicketCard setAllTickets={setAllTickets} {...currData} />
          );
        })}
      </div>
    </>
  );
};

export default AllTickets;
