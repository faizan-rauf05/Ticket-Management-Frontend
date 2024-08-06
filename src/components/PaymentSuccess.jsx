import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.user);

  const goToHome = () => {
    if (user.role === "user") {
      navigate("/user");
    } else if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/company");
    }
  };

  return (
    <div className="w-[full] h-[100vh] flex justify-center items-center">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Payment Successfull
        </h5>
        <button
          className="bg-[#0e1f33] p-1 rounded text-white"
          onClick={goToHome}
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
