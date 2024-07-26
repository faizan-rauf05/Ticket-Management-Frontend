import React from "react";

const CompaniesCard = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" className="px-6 py-3 text-white">
                Company name
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Country
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Province
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td className="px-6 py-4 text-white">faizan@gmail.com</td>
              <td className="px-6 py-4 text-white">Pakistan</td>
              <td className="px-6 py-4 text-white">Punjab</td>
              <td className="px-6 py-4 text-white">
                <a
                  href="#"
                  className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className=" border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td className="px-6 py-4 text-white">faizan@gmail.com</td>
              <td className="px-6 py-4 text-white">Pakistan</td>
              <td className="px-6 py-4 text-white">Punjab</td>
              <td className="px-6 py-4 text-white">
                <a
                  href="#"
                  className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className=" odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td className="px-6 py-4 text-white">faizan@gmail.com</td>
              <td className="px-6 py-4 text-white">Pakistan</td>
              <td className="px-6 py-4 text-white">Punjab</td>
              <td className="px-6 py-4 text-white">
                <a
                  href="#"
                  className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td className="px-6 py-4 text-white">faizan@gmail.com</td>
              <td className="px-6 py-4 text-white">Pakistan</td>
              <td className="px-6 py-4 text-white">Punjab</td>
              <td className="px-6 py-4 text-white">
                <a
                  href="#"
                  className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td className="px-6 py-4 text-white">faizan@gmail.com</td>
              <td className="px-6 py-4 text-white">Pakistan</td>
              <td className="px-6 py-4 text-white">Punjab</td>
              <td className="px-6 py-4 text-white">
                <a
                  href="#"
                  className="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompaniesCard;
