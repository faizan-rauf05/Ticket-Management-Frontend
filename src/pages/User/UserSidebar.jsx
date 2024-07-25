import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { post } from "../../services/apiEndpoint";
import { Logout } from "../../redux/Authslice";
import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { TfiEnvelope } from "react-icons/tfi";
import { Outlet } from "react-router-dom";
import bg3 from "../../images/register2.jpg"
import { RiBloggerLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

const UserSidebar = () => {
  const [sidebar, setOpenSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const request = await post("/api/auth/logout");
    if (request.status == 200) {
      toast.success(request.data.message);
      dispatch(Logout());
      navigate("/login");
    }
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setOpenSidebar(!sidebar)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <button
          onClick={() => setOpenSidebar(false)}
          className="text-white absolute	left-[13rem] sm:hidden dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#09131f] dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="mb-8">
              <Link
                to="/user"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <CiUser size={28} />
                <span className="ms-3">User Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <IoTicketOutline size={20} />
                <span className="ms-3">Available Tickets</span>
              </Link>
            </li>
            <li>
              <Link
                to="purchased-tickets"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <CiShoppingCart size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Cart</span>
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <RiBloggerLine size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="parcel"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <TfiEnvelope size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Parcel</span>
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <CiUser size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>

            <li onClick={handleLogout}>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#0e1f33] dark:hover:bg-gray-700 group"
              >
                <CiLogout size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" sm:ml-64">
        <div
          className="p-4 min-h-[100vh] dark:border-gray-700"
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
