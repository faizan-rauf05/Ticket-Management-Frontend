import React from "react";
import { PiBusThin } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiGift } from "react-icons/pi";
import { PiTicketLight } from "react-icons/pi";
import { MdOutlineShowChart } from "react-icons/md";

const Dashboard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-14 mx-auto">
        <div className="flex flex-wrap -m-4 gap-[3rem] justify-center ">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <MdOutlineShowChart />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Total Revenue
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              5000$
            </p>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiTicketLight />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Tickets Sold
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">300</p>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiBusThin />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Bus Tickets Sold
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">100</p>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <IoTrainOutline />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Train Tickets Sold
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">70</p>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <GiAirplaneDeparture />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Airplane Tickets Sold
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">90</p>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiGift />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Parcel delivered
            </h5>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
