import React from "react";
import faisalMasjid from "../../images/faisal-masjid.jpeg";

const Singleblog = () => {
  return (
    <>
      <main class="container mx-auto mt-8">
        <div class="flex flex-wrap justify-between">
          <div class="w-full md:w-8/12 px-4 mb-8">
            <img
              src={faisalMasjid}
              alt="Featured Image"
              class="w-full h-74 object-cover rounded"
            />
            <h2 class="text-4xl font-bold mt-4 mb-2 text-white ">My First Blog Post</h2>
            <p class="text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
        </div>
      </main>
    </>
  );
};

export default Singleblog;
