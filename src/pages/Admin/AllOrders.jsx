import React, { useEffect, useState } from "react";
import { get, del } from "../../services/apiEndpoint";
import toast from "react-hot-toast";

const AllOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [paidOrders, setPaidOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      const response = await get("/api/admin/orders");
      if (response.status == 200) {
        setPendingOrders(response.data.pendingOrders);
        setPaidOrders(response.data.paidOrders);
      }
      // setAllUsers(response.data.filteredUsers);
    };
    fetchAllOrders();
  }, []);

  return (
    <>
      <h2 className="text-center text-2xl text-white">Fullfilled Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                price
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Quantity
              </th>
              {/* <th scope="col" className="px-6 py-3 text-white">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {paidOrders?.map((currItem) => {
              return (
                <tr key={currItem._id}>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.departurePlace} to {currItem.arrivalPlace}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.totalPrice}
                  </td>
                  <td scope="col" className="px-6 py-3 text-white">
                    {currItem.quantity}
                  </td>
                  {/* <td className="px-6 py-4 text-white">
                    <a
                      // onClick={() => deleteUser(currItem._id)}
                      className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrders;
