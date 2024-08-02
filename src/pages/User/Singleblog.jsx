import React, { useEffect } from "react";
import { get } from "../../services/apiEndpoint";
import { useState } from "react";

const Singleblog = () => {
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const response = await get("/api/user/singleblog");
      if (response.status == 200) {
        setBlogDetails(response.data.singleBlogDetails);
      }
    };
    fetchAllBlogs();
  }, []);

  return (
    <>
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <img
              src={`http://localhost:3000/images/${blogDetails.image}`}
              alt="Featured Image"
              className="w-full h-74 object-cover rounded"
            />
            <h2 className="text-4xl font-bold mt-4 mb-2 text-white ">
              {blogDetails.title}
            </h2>
            <p className="text-white mb-4">{blogDetails.blog}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Singleblog;
