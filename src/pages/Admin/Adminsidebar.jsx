import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../services/apiEndpoint";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/Authslice";
import { CiUser } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import AdminDashboard from "../Admin/AdminDashboard";

const Adminsidebar = () => {
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
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li className="mb-8">
              <Link
                to="/admin"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiUser />
                <span class="ms-3">Admin Dashboard</span>
              </Link>
            </li>
            <li className="mb-8">
              <Link
                to="/admin"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiUser />
                <span class="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="all-tickets"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoTicketOutline />
                <span class="ms-3">All Tickets</span>
              </Link>
            </li>
            <li>
              <Link
                to="all-companies"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoTicketOutline />
                <span class="flex-1 ms-3 whitespace-nowrap">All Companies</span>
              </Link>
            </li>
            <li>
              <Link
                to="add-category"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoTicketOutline />
                <span class="flex-1 ms-3 whitespace-nowrap">Add Category</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoTicketOutline />
                <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>

            <li onClick={handleLogout}>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiLogout />
                <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-1 gap-4 mb-4">
            <AdminDashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminsidebar;
