import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicLayout = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.Auth.user);

  useEffect(() => {
    if (user) {
      if (user.role == "admin") {
        navigate("/admin");
      } else if (user.role == "user") {
        navigate("/user");
      } else {
        navigate("/company");
      }
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
