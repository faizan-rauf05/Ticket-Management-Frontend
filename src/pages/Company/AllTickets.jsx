import React, { useEffect, useState } from "react";
import TicketCard from "./TicketCard";
import { get } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AllTickets = () => {
  const [allTickets, setAllTickets] = useState(null);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await get("/api/company/tickets");
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


  if(!allTickets){
    return(
      <>
        <h2 className="text-white" >No any ticket availabe</h2>
      </>
    )
  }

  return (
    <>
      <h2 className="text-center font-semiBold text-3xl text-white">
        All Tickets
      </h2>
      <div className="flex gap-[2rem] flex-wrap justify-center mt-[2rem]">
        {allTickets?.map((currTicket) => {
          return <TicketCard key={currTicket._id} {...currTicket} setAllTickets={setAllTickets} />;
        })}
      </div>
    </>
  );
};

export default AllTickets;
