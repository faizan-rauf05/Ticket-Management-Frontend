import React, { useEffect, useState } from "react";
import CategoriesCard from "../../components/CategoriesCard";

const AddTicket = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   console.log("Work");
  //   try {
  //     const fetchAllCategories = async () => {
  //       const response = await get("/api/admin/categories");
  //       setCategories(response.data);
  //     };
  //     fetchAllCategories();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <>
      <div className="flex gap-[2rem] flex-wrap justify-center mt-[3rem]">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </>
  );
};

export default AddTicket;
