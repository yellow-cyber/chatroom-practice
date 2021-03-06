import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api/api";
import background from "../assets/img/hack.png";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/login", { username, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } else {
        setIsAuthenticated(false);
        Toast.fire({
          icon: "error",
          title: "Wrong username/password!",
        });
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Something went wrong!",
      });
    }
  };
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-t from-teal-400 to-blue-500">
      <div className="w-1/2  flex">
        <img
          src={background}
          className="min-h-screen max-h-screen w-9/12"
          alt=""
        />
      </div>
      <div className="w-1/2 items-center justify-center  flex">
        <div className="animate__animated animate__bounceIn flex flex-col bg-white h-full py-6 px-12 rounded-lg w-1/2">
          <div className="px-4 text-center">
            <h1 className="font-bold text-gray-700">SIGN IN TO YOUR ACCOUNT</h1>
          </div>
          <div className="mt-5 flex flex-col">
            <form onSubmit={loginSubmit}>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                className="my-1 rounded-lg p-4 text-xs focus:outline-none text-gray-700 bg-gray-200 w-full h-12"
                placeholder="Username"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="my-1 rounded-lg p-4 text-xs focus:outline-none text-gray-700 bg-gray-200 w-full h-12"
                placeholder="Password"
              />

              <button
                type="submit"
                className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 ease-in-out mt-4 mb-2 p-4 rounded-lg text-xs focus:outline-none text-white font-bold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 w-full h-12"
              >
                SIGN IN
              </button>
            </form>

            <Link to="/register" className="text-xs self-center">
              Dont have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
