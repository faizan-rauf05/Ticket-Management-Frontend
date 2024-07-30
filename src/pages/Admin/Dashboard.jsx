import React, { useEffect, useState } from "react";
import { PiBusThin } from "react-icons/pi";
import { IoTrainOutline } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { PiGift } from "react-icons/pi";
import { PiTicketLight } from "react-icons/pi";
import { MdOutlineShowChart } from "react-icons/md";
import {get} from "../../services/apiEndpoint";


const Dashboard = () => {

  const [allData, setAllData] = useState([]);
  const [busData, setbusData] = useState([]);
  const [trainData, settrainData] = useState([]);
  const [airplaneData, setairplaneData] = useState([]);

  useEffect(()=>{
    const fetchAnalytics = async ()=>{
      try {
        const response = await get("api/admin/analytics");
        if(response.status == 200){
          setAllData(response.data.fetchSalesData);
          setbusData(response.data.busData);
          settrainData(response.data.trainData);
          setairplaneData(response.data.airplaneData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAnalytics();
  },[])


  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-3xl text-white text-center" >Dashboard</h2>
      <div className="container px-2 py-14 mx-auto">
        <div className="flex flex-wrap m-4 gap-[3rem] justify-center">
          <div className="w-[250px] flex-grow text-center p-6 bg-[#13253a] hover:scale-110 group border-1 border-gray-200 transition duration-300 cursor-pointer rounded-lg shadow hover:bg-[#09131f] hover:text-white dark:bg-gray-800 dark:border-gray-700">
            <MdOutlineShowChart className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light tracking-tight group-hover:text-white transition duration-300 text-white">
              Total Revenue
            </h5>
            <p className="mb-3 font-normal group-hover:text-white transition duration-300 text-white dark:text-gray-400">
              450$
            </p>
          </div>

          <div className="w-[250px] flex-grow text-center p-6 bg-[#13253a] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#09131f] hover:text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiTicketLight className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light tracking-tight transition duration-300 group-hover:text-white text-white dark:text-white">
              Tickets Sold
            </h5>
            <p className="mb-3 font-normal group-hover:text-white transition duration-300 text-white dark:text-gray-400">
              {allData.length}
            </p>
          </div>

          <div className="w-[250px] flex-grow p-6 text-center bg-[#13253a] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#09131f] hover:text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiBusThin className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light transition duration-300 group-hover:text-white tracking-tight text-white dark:text-white">
              Bus
            </h5>
            <p className="mb-3 font-normal text-white transition duration-300 dark:text-gray-400 group-hover:text-white">
              {busData.length}
            </p>
          </div>

          <div className="w-[250px] flex-grow p-6 text-center bg-[#13253a] group hover:scale-110 transition duration-300 cursor-pointer hover:bg-[#09131f] hover:text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <IoTrainOutline className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light transition duration-300 group-hover:text-white tracking-tight text-white dark:text-white">
              Train
            </h5>
            <p className="mb-3 font-normal text-white transition duration-300 group-hover:text-white dark:text-gray-400">
              {trainData.length}
            </p>
          </div>

          <div className="w-[250px] flex-grow p-6 text-center bg-[#13253a] hover:scale-110 transition duration-300 group cursor-pointer hover:bg-[#09131f] hover:text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <GiAirplaneDeparture className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light transition duration-300 group-hover:text-white tracking-tight text-white dark:text-white">
              Airplane
            </h5>
            <p className="mb-3 font-normal text-white transition duration-300 group-hover:text-white dark:text-gray-400">
              {airplaneData.length}
            </p>
          </div>

          <div className="w-[250px] flex-grow p-6 text-center bg-[#13253a] hover:scale-110 group transition duration-300 cursor-pointer hover:bg-[#09131f] hover:text-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <PiGift className="text-5xl mx-auto" />
            <h5 className="mb-2 text-2xl font-light transition duration-300 group-hover:text-white tracking-tight text-white dark:text-white">
              Parcel delivered
            </h5>
            <p className="mb-3 font-normal text-white transition duration-300 group-hover:text-white dark:text-gray-400">
              50
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
