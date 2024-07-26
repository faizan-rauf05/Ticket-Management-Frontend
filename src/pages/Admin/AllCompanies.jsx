import React from "react";
import CompaniesCard from "./CompaniesCard";

const AllCompanies = () => {
  // const [allCompanies, setAllCompanies] = useState([]);

  // useEffect(()=>{
  //   const fetchAllCompanies = async ()=>{
  //     const response = await get("/api/admin/companies");
  //     setAllCompanies(response.data.allCompanies);
  //   }
  //   fetchAllCompanies();
  // },[])

  return (
    <>
      <h2 className="font-semiBold text-3xl text-center mb-4 text-white">
        All Companies
      </h2>
        <CompaniesCard  />
    </>
  );
};

export default AllCompanies;
