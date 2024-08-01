import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { post } from "../services/apiEndpoint";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AddTicketForm = ({ ticketType, closeModel }) => {
  const user = useSelector((state) => state.Auth.user);
  const companyId = user._id;
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [ticketData, setTicketData] = useState({
    departurePlace: "",
    arrivalPlace: "",
    noOfTickets: "",
    price: "",
    description: "",
  });

  const handleAddTicket = async (e) => {
    e.preventDefault();
    const { departurePlace, arrivalPlace, noOfTickets, price, description } =
      ticketData;
    const isoDepartureDate = departureDate ? departureDate.toISOString() : null;
    const isoArrivalDate = arrivalDate ? arrivalDate.toISOString() : null;
    try {
      let response = await post("/api/company/ticket", {
        departurePlace,
        arrivalPlace,
        noOfTickets,
        departureDate: isoDepartureDate,
        arrivalDate: isoArrivalDate,
        ticketType,
        companyId,
        price,
        description,
      });
      if (response.status == 200) {
        setTicketData({
          departurePlace: "",
          arrivalPlace: "",
          noOfTickets: "",
          seatNo: "",
          price: "",
          description: "",
        });
        setDepartureDate(null);
        setArrivalDate(null);
        toast.success(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("An error occurred while setting up the request");
      }
    }
  };

  const closeModal = () => {
    closeModel(false);
  };

  return (
    <>
      <form
        className="max-w-md mx-auto py-[20px] bg-transparent"
        onSubmit={handleAddTicket}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={ticketData.departurePlace}
            type="text"
            name="departurePlace"
            id="departurePlace"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="departurePlace"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Departure Place
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="arrivalPlace"
            id="arrivalPlace"
            value={ticketData.arrivalPlace}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="arrivalPlace"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Arrival Place
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="noOfTickets"
            id="noOfTickets"
            value={ticketData.noOfTickets}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="noOfTickets"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            No of seats
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="description"
            id="description"
            value={ticketData.description}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="noOfTickets"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="departureDate"
            className="peer-focus:font-medium absolute text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Departure Date
          </label>
          <DatePicker
            className="mt-4 bg-transparent border rounded-md p-[4px] text-white"
            value={departureDate}
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            minDate={new Date()}
            dateFormat={"dd/MM/yyyy"}
            isClearable
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="arrivalDate"
            className="peer-focus:font-medium absolute text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Arrival Date
          </label>
          <DatePicker
            className="mt-4 bg-transparent border rounded-md p-[4px] text-white"
            selected={arrivalDate}
            value={arrivalDate}
            onChange={(date) => setArrivalDate(date)}
            minDate={new Date()}
            dateFormat={"dd/MM/yyyy"}
            isClearable
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="price"
            autoComplete="off"
            value={ticketData.price}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) =>
              setTicketData({
                ...ticketData,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>

        <button
          type="submit"
          // onClick={closeModal}
          className="text-white bg-[#182a3f] focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTicketForm;
