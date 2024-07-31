import React, { useState } from "react";
import { get } from "../services/apiEndpoint";

const SearchBar = ({ setFilteredTickets, allTickets }) => {
  const [searchData, setSearchData] = useState({
    departurePlace: "",
    arrivalPlace: "",
  });

  const handleUserSearch = async (e) => {
    e.preventDefault();
    const resposne = await get(
      `/api/user/search?departure=${searchData.departurePlace}&arrival=${searchData.arrivalPlace}`
    );
    if (resposne.status == 200) {
      setFilteredTickets(resposne.data.searchTickets);
      setSearchData({
        
        departurePlace: "",
        arrivalPlace: "",
      });
    }
  };

  const handleCategorySearch = (type) => {
    if (!type) return;

    const ticketsData = allTickets;
    const res = ticketsData.filter((currTicket) => {
      return currTicket.ticketType === type;
    });

    setFilteredTickets(res);
  };

  return (
    <>
      <div className="bg-transparent p-6 rounded-lg w-full max-w-2xl mx-auto mt-2">
        <form className="flex items-center justify-center flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Departure"
              name="departurePlace"
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
          <h2 className="text-white text-[1.2rem]">to</h2>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Arrival"
              name="arrivalPlace"
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
            <button
              onClick={handleUserSearch}
              className="max-w-lg bg-[#152831] text-white p-3 rounded-lg hover:bg-[#0e1f33] focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="w-full category-search flex gap-2 justify-center mt-2 mb-8">
        <button
          className="bg-[#324258] py-1 px-2 rounded text-white "
          onClick={() => handleCategorySearch("bus")}
        >
          Bus
        </button>
        <button
          className="bg-[#324258] py-1 px-2 rounded text-white "
          onClick={() => handleCategorySearch("train")}
        >
          Train
        </button>
        <button
          className="bg-[#324258] py-1 px-2 rounded text-white "
          onClick={() => handleCategorySearch("airplane")}
        >
          Airplane
        </button>
      </div>
    </>
  );
};

export default SearchBar;
