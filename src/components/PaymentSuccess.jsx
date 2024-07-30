import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);

  const goToHome = ()=>{
    if(user.role === 'user'){
      navigate("/user")
    }else if(user.role === 'admin'){
      navigate("/admin")
    }else{
      navigate("/company")
    }
  }

  return (
    <div>
      <h2>Payment successfull</h2>
      <button onClick={goToHome} >Go to home</button>
    </div>
  )
}

export default PaymentSuccess