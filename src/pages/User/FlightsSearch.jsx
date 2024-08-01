import React, { useState } from "react";
import { get } from "../../services/apiEndpoint";
import CircleLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";

const FlightsSearch = ({ setFlightsData, setFlightsMeta }) => {
  const [searchData, setSearchData] = useState({
    airportcode: "",
    price: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleUserSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await get(
        `/api/destinations?origin=${searchData.airportcode}&maxPrice=${searchData.price}`
      );
      if (response.status == 200) {
        setLoading(false);
        setFlightsData(response.data.data);
        setFlightsMeta(response.data.meta);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "No any data found");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="bg-transparent p-6 rounded-lg w-full max-w-2xl mx-auto mt-2">
        <form
          className="flex items-center justify-center flex-wrap -mx-2"
          onSubmit={handleUserSearch}
        >
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Airport Code"
              name="airportcode"
              className="w-full placeholderColor-white text-white p-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
              value={searchData.departurePlace}
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Max Price"
              name="price"
              className="w-full p-3 bg-transparent text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
              value={searchData.arrivalPlace}
              onChange={(e) =>
                setSearchData({
                  ...searchData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className=" px-2">
            {loading ? (
              <CircleLoader
                color={"#fff"}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="ml-4"
              />
            ) : (
              <button
                type="submit"
                className="w-full text-white bg-[#13253a] hover:bg-[#09131f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FlightsSearch;
