import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import TicketCard from "../Company/TicketCard";
import { get } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AvailableTickets = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const ticketsPerPage = 8;

  const fetchTickets = async (page = 1) => {
    setLoading(true);
    try {
      const response = await get(
        `/api/user/tickets?page=${page}&limit=${ticketsPerPage}`
      );
      if (response.status === 200) {
        setAllTickets(response.data.tickets);
        setFilteredTickets(response.data.tickets);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching tickets");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTickets(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <SearchBar
          setFilteredTickets={setFilteredTickets}
          allTickets={allTickets}
        />
        <h2 className="text-center text-3xl text-white mt-4 font-semiBold ">
          All Tickets
        </h2>
        {filteredTickets.length == 0 ? (
          <div className="text-white" >No any ticket found</div>
        ) : (
          <div className="container px-5 py-8 mx-auto">
            {loading ? (
              <p className="text-center text-white">Loading...</p>
            ) : (
              <div className="flex flex-wrap gap-6">
                {filteredTickets?.map((currTicket) => (
                  <TicketCard key={currTicket._id} {...currTicket} />
                ))}
              </div>
            )}
            <div className="mt-8 flex justify-center mt-4">
              <button
                className="mr-2 px-2 py-1 bg-[#09131f] text-white rounded"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="mx-2 text-white">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="ml-2 px-2 py-1 bg-[#09131f] text-white rounded"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AvailableTickets;
