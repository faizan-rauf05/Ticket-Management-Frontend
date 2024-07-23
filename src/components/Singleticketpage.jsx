import React from "react";
import faisalMasjid from "../images/faisal-masjid.jpeg";
import BlogCard from "../pages/User/BlogCard";
import { CiCloudDrizzle } from "react-icons/ci";
import { TbTemperatureCelsius } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";

const Singleticketpage = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container pt-8 ">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 lg:mt-[2rem] w-full lg:h-[300px] h-60 object-cover object-center rounded"
              src={faisalMasjid}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-white tracking-widest">
                Faisal Movers
              </h2>
              <h1 class="text-white text-3xl title-font font-medium mb-1">
                Pindi - Lahore
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                  <IoIosStar style={{ color: "gold" }} />
                </span>
              </div>
              <p class="leading-relaxed text-white ">
                Lahore, Pakistan's vibrant cultural capital, boasts historic
                landmarks, lush gardens and bustling markets.
              </p>
              <div className="w-full flex justify-between">
                <p className="flex gap-[2px] mt-2 items-center mb-[6px] text-white">
                  Temperature :
                  <CiCloudDrizzle size={"1.6rem"} className="ml-2" />
                  14
                  <TbTemperatureCelsius size={"1.6rem"} />
                </p>
              </div>
              <div class="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex items-center">
                  <span class="mr-3 text-white ">Quantity</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-[1.2rem] text-white">
                  Rs 500.00
                </span>
                <button class="flex ml-auto text-white bg-[#13253a] hover:bg-[#09131f] border-0 py-2 px-6 focus:outline-none rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* Related Blogs  */}
      <h2 className="mt-4 text-white text-3xl text-center">Related Blogs</h2>
      <div className="flex flex-wrap gap-8 justify-center mt-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
};

export default Singleticketpage;
