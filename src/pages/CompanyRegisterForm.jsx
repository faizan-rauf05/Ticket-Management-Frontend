import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/apiEndpoint";
import toast from "react-hot-toast";
import registerImage from "../images/register5.jpg";

const CompanyRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    companyName: "",
    country: "",
    province: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { companyName, country, province, email, password } = data;
    console.log(companyName, country, province, email, password);
    try {
      const request = await post("/api/auth/company-register", {
        companyName,
        country,
        province,
        email,
        password,
      });
      const response = request.data;
      if (request.status == 200) {
        toast.success(response.message);
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="w-full h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${registerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full backdrop-blur-md bg-opacity-10 bg-inherit max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-large text-white dark:text-white">
              Register as a company
            </h5>
            <div>
              <input
                type="text"
                name="companyName"
                id="companyName"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Company name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="country"
                id="country"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Country"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="province"
                id="province"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Province"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-white bg-[#13253a] hover:bg-[#09131f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register 
            </button>
            <div className="text-sm flex gap-4 font-medium text-white dark:text-gray-300">
              Have an account{" "}
              <Link
                to={"/login"}
                className="text-black hover:underline dark:text-blue-500"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
