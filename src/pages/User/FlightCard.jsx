import React, { useState } from "react";
import plane from "../../images/plane.jpg";

const FlightCard = ({
  departureDate,
  returnDate,
  origin,
  destination,
  price,
  flightsMeta,
}) => {
  return (
    <>
      <div className="md:max-w-[220px] w-full bg-white shadow-inner transition-transform transform hover:-translate-y-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full object-cover h-[160px]"
            src={plane}
            alt=""
          />
        </a>
        <div
          className={
            "p-2 bg-[#03305b]  bg-[#0e1f33] rounded-b-lg min-h-[143px]"
          }
        >
          <a href="#">
            <h5 className="mb-[4px] text-1xl font-bold tracking-tight text-white dark:text-white">
              <strong>
                {origin}-{destination}
              </strong>
            </h5>
          </a>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            <strong>Departure :</strong> {departureDate}
          </p>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            <strong>Return :</strong> {returnDate}
          </p>
          <p className="mb-[4px] text-[.85rem] font-normal text-white dark:text-gray-400">
            <strong>Price :</strong> {`${price.total} ${flightsMeta.currency}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
