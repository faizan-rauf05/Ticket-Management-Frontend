import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-transparent p-6 rounded-lg w-full max-w-2xl mx-auto mt-2">
      <form className="flex items-center justify-center flex-wrap -mx-2">
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Departure"
            className="w-full placeholderColor-white text-white p-3 bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
            // value={keyword}
            // onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <h2 className="text-white text-[1.2rem]" >to</h2>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Arrival"
            className="w-full p-3 bg-transparent text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className=" px-2">
          <button
            type="submit"
            className="max-w-lg bg-[#152831] text-white p-3 rounded-lg hover:bg-[#0e1f33] focus:outline-none focus:ring-2 focus:ring-[#0e1f33]"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
