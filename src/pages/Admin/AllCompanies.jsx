import React from "react";
import CompaniesCard from "./CompaniesCard";

const AllCompanies = () => {
  return (
    <>
      <div className="flex gap-[2rem] flex-wrap justify-center mt-[3rem]">
        <CompaniesCard />
        <CompaniesCard />
        <CompaniesCard />
        <CompaniesCard />
      </div>
    </>
  );
};

export default AllCompanies;
