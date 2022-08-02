import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../home/component/Navbar";

export default function LoginRegister() {
  let navigate = useNavigate();

  const loginSave = () => {
    navigate("/main");
  };

  useEffect(() => {
    document.title = "Login/Register";
  }, []);

  return (
    <div className="bg-grey-100 h-screen">
      <Navbar />
      <div className="flex justify-center p-5 mx-5">
        <div className="flex-initial mx-5">
          <form className="bg-white p-5">
            <div className="mb-6 text-center">
              <h1 className="font-bold">Masuk</h1>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
              />
              <p className="text-gray-600 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={loginSave}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex-initial mx-5">
        <form className="bg-white p-5">
            <div className="mb-6 text-center">
              <h1 className="font-bold">Pendaftaran</h1>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
              />
              <p className="text-gray-600 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={loginSave}
              >
                Sign In
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
