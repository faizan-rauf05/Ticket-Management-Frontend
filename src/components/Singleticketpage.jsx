import React, { useEffect, useState } from "react";
import faisalMasjid from "../images/faisal-masjid.jpeg";
import BlogCard from "../pages/User/BlogCard";
import { TbTemperatureCelsius } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { get, post } from "../services/apiEndpoint";
import DestinationWeather from "../pages/User/DestinationWeather";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Singleticketpage = () => {
  const user = useSelector((state) => state.Auth.user);
  const { id } = useParams();
  const [ticketDetails, setTicketDetails] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Get All Blogs
  const getAllBlogs = async (city) => {
    try {
      const response = await get(`/api/user/blogs/${city}`);
      setBlogs(response.data.getBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch ticket details
  const fetchTicketDetails = async () => {
    try {
      const response = await get(`/api/user/ticket-details/${id}`);
      setTicketDetails(response.data.ticketDetails);
      const city = response.data.ticketDetails.arrivalPlace;
      if (city) {
        getAllBlogs(city);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicketDetails();
  }, [id]);

  // Fetch Destination Weather

  const {
    departurePlace,
    arrivalPlace,
    departureDate,
    arrivalDate,
    noOfTickets,
    price,
    ticketType,
    description,
    _id,
    type
  } = ticketDetails;
  const ticketOptions = Array.from({ length: noOfTickets }, (_, i) => i + 1);

  const handleCart = async () => {
    try {
      const response = await post("/api/user/cart", {
        departurePlace,
        arrivalPlace,
        quantity,
        totalPrice : price,
        id: user._id,
        ticketId: _id,
        ticketType
      });
      if (response.status == 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container pt-8 ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 lg:mt-[2rem] w-full lg:h-[300px] h-60 object-cover object-center rounded"
              src={faisalMasjid}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-white tracking-widest">
                Faisal Movers
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {departurePlace} - {arrivalPlace}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                </span>
              </div>
              <p className="leading-relaxed text-white ">{description}</p>
              <div className="w-full flex justify-between">
                <div className="flex gap-[2px] mt-2 items-center mb-[6px] text-white">
                  Temperature :
                  <DestinationWeather location={arrivalPlace} />
                  <TbTemperatureCelsius size={"1.6rem"} />
                </div>
              </div>
              <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-white ">Total Tickets</span>
                  <div className="relative">
                    <select
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      value={quantity}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      {ticketOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-[1.2rem] text-white">
                  Rs {price}
                </span>
                {noOfTickets !== 0 ? (
                  <button
                    onClick={handleCart}
                    className="flex ml-auto text-white bg-[#13253a] hover:bg-[#09131f] border-0 py-2 px-6 focus:outline-none rounded"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button className="flex ml-auto text-white bg-[#808080] border-0 py-2 px-6 focus:outline-none rounded">
                    No any seat available
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Related Blogs  */}
      <h2 className="mt-4 text-white text-3xl text-center">Related Blogs</h2>
      <div className="flex flex-wrap gap-8 justify-center mt-4">
        {blogs
          ? blogs?.map((currBlog) => {
              return <BlogCard key={currBlog._id} {...currBlog} />;
            })
          : <p className="text-white" >No any blog available</p>}
      </div>
    </>
  );
};

export default Singleticketpage;
