import React, { useEffect, useState } from "react";
import { get, del } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const CompaniesCard = () => {
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      const response = await get("/api/admin/companies");
      setAllCompanies(response.data.allCompanies);
    };
    fetchAllCompanies();
  }, []);

  const deleteComapany = async (id) => {
    try {
      const response = await del(`/api/admin/company/${id}`);
      if (response.status == 200) {
        setAllCompanies(response.data.remainingCompanies);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Country
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Province
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                email
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allCompanies?.map((currItem) => {
              return (
                <tr key={currItem._id}>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.companyName}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.country}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.province}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.email}
                  </td>
                  <td className="px-6 py-4 text-white">
                    <a
                      onClick={() => deleteComapany(currItem._id)}
                      className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompaniesCard;
