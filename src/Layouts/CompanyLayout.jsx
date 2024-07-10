import React from "react";
import Companysidebar from "../pages/Company/Companysidebar";
import CompanyDashboard from "../pages/Company/CompanyDashboard";

const CompanyLayout = () => {
  return (
    <div className="flex w-[100%]">
      <Companysidebar />
      <CompanyDashboard />
    </div>
  );
};

export default CompanyLayout;
