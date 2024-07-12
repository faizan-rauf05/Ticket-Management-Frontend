import React, { useEffect } from "react";
import Companysidebar from "../pages/Company/Companysidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <Companysidebar />;
};

export default CompanyLayout;
