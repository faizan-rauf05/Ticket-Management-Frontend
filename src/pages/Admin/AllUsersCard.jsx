import React, { useEffect, useState } from "react";
import { get, del } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AllUsersCard = () => {
  const [users, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await get("/api/admin/users");
      setAllUsers(response.data.filteredUsers);
    };
    fetchAllUsers();
  }, []);

  // Delete Company
  const deleteUser = async (id) => {
    try {
      const response = await del(`/api/admin/user/${id}`);
      if (response.status == 200) {
        setAllUsers(response.data.remainingUsers);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((currItem) => {
              return (
                <tr key={currItem._id}>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.name}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.email}
                  </td>
                  <td className="px-6 py-4 text-white">
                    <a
                      onClick={() => deleteUser(currItem._id)}
                      className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsersCard;
