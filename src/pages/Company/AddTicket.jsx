import React, { useEffect, useState } from "react";
import CategoriesCard from "../../components/CategoriesCard";
import { get } from "../../services/apiEndpoint";

const AddTicket = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await get("/api/admin/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCategories();
  }, []);

  return (
    <>
      {/* <h2 className="text-center text-3xl text-white font-semiBold ">
        Add Tickets
      </h2> */}
      <h2 className="text-center mt-2 text-3xl text-white font-semiBold ">
        Select Category
      </h2>
      <div className="flex gap-[2rem] flex-wrap justify-center mt-[2rem] ">
        {categories.map((currCategory) => {
          return <CategoriesCard key={currCategory._id} data={currCategory} />;
        })}
      </div>
    </>
  );
};

export default AddTicket;
