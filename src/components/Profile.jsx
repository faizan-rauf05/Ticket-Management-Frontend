import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { put } from "../services/apiEndpoint";
import { SetUser } from "../redux/Authslice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();

  // Company Profile
  const [profileData, setProfileData] = useState({
    companyName: "",
    country: "",
    province: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [userProfileData, setUserProfileData] = useState({
    name:"",
    email:""
  });
  const user = useSelector((state) => state.Auth.user);

  if (user.role == "company") {
    useEffect(() => {
      if (user) {
        setProfileData({
          companyName: user.companyName || "",
          country: user.country || "",
          province: user.province || "",
          email: user.email || "",
          oldPassword: "",
          newPassword: "",
        });
      }
    }, [user]);
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const { companyName, country, province, email } = profileData;
    try {
      const response = await put(`/api/company/profile/${profileData._id}`, {
        companyName,
        country,
        province,
        email,
      });
      if (response.status == 200) {
        dispatch(SetUser(response.data.updatedProfile));
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = profileData;
    try {
      const response = await put(
        `/api/company/profile/password/${profileData._id}`,
        {
          oldPassword,
          newPassword,
        }
      );
      if (response.status == 200) {
        // dispatch(SetUser(response.data.updatedProfile));
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Handle company update end

  ////////////User Profile Start///////////
  if (user.role == "user" || user.role == "admin") {
    useEffect(() => {
      setUserProfileData({
        name : user.name || "",
        email : user.email || "",
        id : user._id || ""
      });
    }, []);
  }

  const handleUpdateUserProfile = async (e)=>{
    e.preventDefault();
    const {name, email, id} = userProfileData;
    try {
      const response = await put(`/api/user/profile/${id}`, {
        name,
        email
      });
      if (response.status == 200) {
        dispatch(SetUser(response.data.updatedProfile));
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //User Profile end

  return (
    <>
      {user?.role == "user" || user?.role == "admin" ? (
        <div className="flex justify-center ">
          <div className="w-full bg-transparent p-4 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-3xl text-white text-center mb-8">Profile</h2>
            <form className="max-w-3xl mx-auto" onSubmit={handleUpdateUserProfile} >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userProfileData.name}
                  onChange={(e) => {
                    setUserProfileData({
                      ...userProfileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={userProfileData.email}
                  onChange={(e) => {
                    setUserProfileData({
                      ...userProfileData,
                      [e.target.email]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              {/* <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="text"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Change your password
                </label>
              </div> */}
              <button
                type="submit"
                className="text-white bg-[#0d1f33] hover:bg-[#09131f] focus:ring-4 focus:outline-none focus:ring-[#0d1f33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update your profile
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          <div className="w-full bg-transparent p-4 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-3xl text-white text-center mb-8">
              Company Profile
            </h2>
            <form className="max-w-3xl mx-auto" onSubmit={handleUpdateProfile}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="companyName"
                  value={profileData.companyName}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  id="companyName"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="companyName"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={profileData.country}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="country"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Country
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="province"
                  id="province"
                  value={profileData.province}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="province"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Province
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profileData.email}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
                <h2 className="text-white mt-8 text-center font-semiBold text-[1.2rem]">
                  Change Password
                </h2>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={profileData.oldPassword}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="oldPassword"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Old Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={profileData.newPassword}
                  onChange={(e) => {
                    setProfileData({
                      ...profileData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="newPassword"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:bg-[#0d1f33] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  New password
                </label>
              </div>

              <button
                onClick={handleUpdatePassword}
                className=" mr-4 text-white bg-[#0d1f33] hover:bg-[#09131f] focus:ring-4 focus:outline-none focus:ring-[#0d1f33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Change Password
              </button>
              <button
                type="submit"
                className="text-white bg-[#0d1f33] hover:bg-[#09131f] focus:ring-4 focus:outline-none focus:ring-[#0d1f33] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update your profile
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
