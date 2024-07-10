import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Adminsidebar from "../pages/Admin/Adminsidebar";
import AdminDashboard from "../pages/Admin/AdminDashboard";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);
  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <div className="flex w-[100%]">
        <Adminsidebar />
        <AdminDashboard/>
      </div>
    </>
  );
};

export default AdminLayout;
