import React from "react";

const MessageBox = ({ sendMessage, handleChange, message }) => {
  return (
    <form onSubmit={sendMessage}>
      <div className="flex mt-auto">
        <div className="flex items-center bg-gray-100 shadow-lg p-4 w-full">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="w-6 h-6 text-teal-400 bi bi-plus-circle-fill mr-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
            />
          </svg>

          <div className="w-full">
            <input
              type="text"
              onChange={handleChange}
              value={message}
              className="focus:outline-none border rounded-xl bg-white px-4 py-2 w-full"
            />
          </div>
          <button className="transition duration-500 transform hover:scale-110 focus:outline-none flex items-center justify-center ml-5 bg-gradient-to-br from-blue-400 to-blue-500 text-white px-4 py-2 rounded-xl text-sm">
            Send
            <span className="ml-1">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="h-3 w-3 bi bi-chevron-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageBox;
