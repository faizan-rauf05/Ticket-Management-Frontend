import React from "react";
import { PiBusThin } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiGift } from "react-icons/pi";
import { PiTicketLight } from "react-icons/pi";
import { MdOutlineShowChart } from "react-icons/md";
import Chart from "../../components/Chart";

const Dashboard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-14 mx-auto">
        <div className="flex flex-wrap -m-4 gap-[3rem] justify-center">
          <div className="w-[300px] flex-grow text-center p-6 bg-[#FFCF76] hover:scale-110 group border border-gray-200 transition duration-300 cursor-pointer rounded-lg shadow hover:bg-[#FFC023] hover:text-white dark:bg-gray-800 dark:border-gray-700">
            <MdOutlineShowChart className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight group-hover:text-white transition duration-300 text-black">
              Total Revenue
            </h5>
            <p className="mb-3 font-normal group-hover:text-white transition duration-300 text-gray-500 dark:text-gray-400">
              5000$
            </p>
          </div>

          <div className="w-[300px] flex-grow text-center p-6 bg-[#FDFF85] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#E8EB20] hover:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiTicketLight className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight transition duration-300 group-hover:text-white text-gray-900 dark:text-white">
              Tickets Sold
            </h5>
            <p className="mb-3 font-normal group-hover:text-white transition duration-300 text-gray-500 dark:text-gray-400">
              300
            </p>
          </div>

          <div className="w-[300px] flex-grow p-6 text-center bg-[#C9FF85] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#9BEB20] hover:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiBusThin className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold transition duration-300 group-hover:text-white tracking-tight text-gray-900 dark:text-white">
              Bus
            </h5>
            <p className="mb-3 font-normal text-gray-500 transition duration-300 dark:text-gray-400 group-hover:text-white">
              100
            </p>
          </div>

          <div className="w-[300px] flex-grow p-6 text-center bg-[#8CFFA3] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#20EB9E] hover:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <IoTrainOutline className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold transition duration-300 group-hover:text-white tracking-tight text-gray-900 dark:text-white">
              Train
            </h5>
            <p className="mb-3 font-normal text-gray-500 transition duration-300 group-hover:text-white dark:text-gray-400">
              70
            </p>
          </div>

          <div className="w-[300px] flex-grow p-6 text-center bg-[#8CFFF5] hover:scale-110 transition duration-300 group cursor-pointer hover:bg-[#1AE8DF] hover:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <GiAirplaneDeparture className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold transition duration-300 group-hover:text-white tracking-tight text-gray-900 dark:text-white">
              Airplane
            </h5>
            <p className="mb-3 font-normal text-gray-500 transition duration-300 group-hover:text-white dark:text-gray-400">
              90
            </p>
          </div>

          <div className="w-[300px] flex-grow p-6 text-center bg-[#8CBBFF] hover:scale-110 group transition duration-300 cursor-pointer hover:bg-[#4880F7] hover:text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiGift className="text-6xl mx-auto" />
            <h5 className="mb-2 text-2xl font-semibold transition duration-300 group-hover:text-white tracking-tight text-gray-900 dark:text-white">
              Parcel delivered
            </h5>
            <p className="mb-3 font-normal text-gray-500 transition duration-300 group-hover:text-white dark:text-gray-400">
              50
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
