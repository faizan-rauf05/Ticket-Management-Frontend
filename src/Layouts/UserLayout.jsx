import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserSidebar from '../pages/User/UserSidebar';
import UserDashboard from "../pages/User/UserDashboard";

const UserLayout = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.Auth.user);

  useEffect(()=>{
    if(!user){
      navigate("/login");
    }
  },[user])

  return (
    <>
      <div className="flex w-[100%]">
        <UserSidebar />
        <UserDashboard/>
      </div>
    </>
  )
}

export default UserLayout