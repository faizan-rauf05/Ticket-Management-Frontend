import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/apiEndpoint";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetUser } from "../redux/Authslice";
import Loginimg from "../images/login5.jpg";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const siteKey = "6LcqQxgqAAAAAHEkIK2btCFneoJQZMnz3UTC7M5H";

  const [data, setData] = useState({
    email: "",
    password: "",
    loginType: "",
  });
  const [reCaptcha, setReCaptcha] = useState("");
  const captchaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    captchaRef.current.reset();
    const { email, password, loginType } = data;
    try {
      const request = await post("/api/auth/login", {
        email,
        password,
        loginType,
        reCaptcha
      });
      const response = request.data;
      if (request.status == 200) {
        switch (response.user.role) {
          case "admin":
            navigate("/admin");
            break;
          case "user":
            navigate("/user");
            break;
          case "company":
            navigate("/company");
            break;

          default:
            break;
        }
        toast.success(response.message);
        dispatch(SetUser(response.user));
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error("An error occurred while setting up the request");
      }
      console.error(error);
    }
  };

const handleRecaptcha = (value)=>{
  setReCaptcha(value);
}

  // const handleGoogleSignIn = () => {
  //   window.location.href = "http://localhost:3000/api/auth/google"; // Redirect to Google OAuth
  // };

  return (
    <>
      <div
        className="w-full h-[100vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${Loginimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full backdrop-blur-sm bg-opacity-10 bg-inherit max-w-sm p-4 bg-white border border-white rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h5 className="text-xl font-medium text-white dark:text-white">
              Login to our platform
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-white dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-white dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            {/* Radio buttons  */}

            <h3 className="text-white font-light text-gray-900 dark:text-white">
              Login as
            </h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-transparent rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value="admin"
                    name="list-radio"
                    onChange={(e) => {
                      setData({
                        ...data,
                        loginType: e.target.value,
                      });
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-license"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Admin{" "}
                  </label>
                </div>
              </li>
              <li className="w-full ">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-id"
                    type="radio"
                    value="user"
                    name="list-radio"
                    onChange={(e) => {
                      setData({
                        ...data,
                        loginType: e.target.value,
                      });
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-id"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    User
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="horizontal-list-radio-military"
                    type="radio"
                    value="company"
                    name="list-radio"
                    onChange={(e) => {
                      setData({
                        ...data,
                        loginType: e.target.value,
                      });
                    }}
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="horizontal-list-radio-military"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Company
                  </label>
                </div>
              </li>
            </ul>
            <div>
              <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptcha} ref={captchaRef} />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-white bg-[#13253a] hover:bg-[#09131f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            {/* <button
              type="submit"
              onClick={handleGoogleSignIn}
              className="w-full text-white bg-[#13253a] hover:bg-[#09131f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login with google
            </button> */}
            <div className="text-md font-medium text-white dark:text-gray-300">
              Not a user{" "}
              <Link
                to="/"
                className="text-white text-md hover:underline dark:text-blue-500"
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
