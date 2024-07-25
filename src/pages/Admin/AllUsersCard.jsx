import React from "react";

const AllUsersCard = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-transparent">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-transparent">
          <thead class="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-transparent">
            <tr>
              <th scope="col" class="px-6 py-3 text-white">
                User name
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Email
              </th>
              <th scope="col" class="px-6 py-3 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody  >
            <tr class="odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td class="px-6 py-4 text-white">faizan@gmail.com</td>
              <td class="px-6 py-4 text-white">
                <a
                  href="#"
                  class="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr class=" border-b dark:border-gray-700">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td class="px-6 py-4 text-white">rehan@gmail.com</td>
              <td class="px-6 py-4 text-white">
                <a
                  href="#"
                  class="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr class=" odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td class="px-6 py-4 text-white">abdul@gmail.com</td>
              <td class="px-6 py-4 text-white">
                <a
                  href="#"
                  class="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr class="border-b dark:border-gray-700">
            <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td class="px-6 py-4 text-white">faizan@gmail.com</td>
              <td class="px-6 py-4 text-white">
                <a
                  href="#"
                  class="font-medium text-red-700 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
              >
                Faizan
              </th>
              <td class="px-6 py-4 text-white">ali@gmail.com</td>
              <td class="px-6 py-4 text-white">
                <a
                  href="#"
                  class="font-medium text-red-700 dark:text-blue-500 hover:underline"
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

export default AllUsersCard;
