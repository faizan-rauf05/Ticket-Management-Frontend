import React from "react";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { post } from "../../services/apiEndpoint";
import Logout from "../../redux/Authslice";

const Companysidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const request = await post("/api/auth/logout");
    if (request.status == 200) {
      dispatch(Logout());
      navigate("/login");
    }
  };


  return (
    <div className="min-h-screen flex flex-row bg-gray-100 border">
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden m-1">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              to="/company"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <IoTicketOutline />
              </span>
              <span className="text-sm font-medium">Add Tickets</span>
            </Link>
          </li>
          <li>
            <Link
              to="all-tickets"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <IoTicketOutline />
              </span>
              <span className="text-sm font-medium">All Tickets</span>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out"></i>
              </span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Companysidebar;
