import React, { useState } from "react";
import FlightsSearch from "./FlightsSearch";
import FlightCard from "./FlightCard";

const Flights = () => {
  const [flightsData, setFlightsData] = useState([]);
  const [flightsMeta, setFlightsMeta] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Calculate the current items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFlights = flightsData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(flightsData.length / itemsPerPage))
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <FlightsSearch
        setFlightsData={setFlightsData}
        setFlightsMeta={setFlightsMeta}
      />
      <h2 className="text-white text-center text-3xl my-4">
        Real-Time Flights Data {flightsData.length}
      </h2>
      <div className="w-full flex gap-4 flex-wrap">
        {currentFlights.map((currFlight, index) => {
          return (
            <FlightCard key={index} {...currFlight} flightsMeta={flightsMeta} />
          );
        })}
      </div>
      <div className="pagination-controls mx-auto my-4">
        <button
          onClick={handlePreviousPage}
          className="bg-[#09131f] rounded p-2 text-white mr-2"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPage} of {Math.ceil(flightsData.length / itemsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-[#09131f] rounded p-2 text-white ml-2"
          disabled={
            currentPage === Math.ceil(flightsData.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Flights;
