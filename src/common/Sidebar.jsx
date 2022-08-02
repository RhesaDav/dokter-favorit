import React, { useState } from "react";
import Header from "./Header";

export default function Sidebar(props) {
  const { value, page } = props;

  return (
    <div>
      <aside className="h-screen w-64 bg-blue-100 relative">
        <div className="flex flex-col items-center">
          <img
            src="https://dummyimage.com/80x80/bf24bf/fff.png&text=davinanto"
            alt="logo"
            className="rounded-full h-24 w-24"
          />
          <span>Welcome Back!</span>
          <h1>Rhesa</h1>
        </div>
        <ul className="my-10 mx-5">
            <li className="text-sm font-bold my-3">Dashboard</li>
            <li className="text-sm font-bold my-3">Appoinment</li>
            <li className="text-sm font-bold my-3">Payment</li>
            <li className="text-sm font-bold my-3">Doctor List</li>
            <li className="text-sm font-bold my-3">History</li>
        </ul>
        <div className="">
            <button className="absolute inset-x-0 bottom-0 h-16 mb-10">Logout</button>
        </div>
      </aside>
    </div>
  );
}
