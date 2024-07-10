import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicLayout = () => {
  const navigate = useNavigate();

  const user = useSelector((state)=> state.Auth.user);

  useEffect(()=>{
    if(user){
      if(user.role == 'admin'){
        navigate('/admin');
      }else{
        navigate('/user')
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
