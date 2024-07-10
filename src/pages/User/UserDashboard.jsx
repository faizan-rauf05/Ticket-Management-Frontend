import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { post } from "../../services/apiEndpoint";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../redux/Authslice";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Auth.user);

  const handleLogout = async () => {
    try {
      const request = await post("/api/auth/logout");
      const response = request.data;
      if (request.status == 200) {
        dispatch(Logout());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Outlet />
    </>
  );
};

export default UserDashboard;
