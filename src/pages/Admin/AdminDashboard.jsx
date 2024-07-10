import React from 'react'
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className=" w-[100%] m-2 shadow-md p-2"><Outlet /></div>
  )
}

export default AdminDashboard