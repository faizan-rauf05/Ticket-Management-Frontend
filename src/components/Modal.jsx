import React from "react";
import formBack from "../images/form-back.jpg";

const Modal = ({ closeModel, form, text }) => {
  const closeModal = () => {
    closeModel(false);
  };

  return (
    <>
      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-[#09131f] rounded-lg shadow dark:bg-gray-700 h-full flex flex-col overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-white dark:text-white">
                {text}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div
              className="flex-1 overflow-y-auto"
              style={{
                backgroundImage: `url(${formBack})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {form}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
