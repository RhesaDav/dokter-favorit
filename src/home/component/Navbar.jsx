import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({homeMode}) {
  const [isHome, setIsHome] = useState(true);
  
  const handleHome = () => {
    if (isHome === true) {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }

  return (
    <>
      <nav className="">
        <div className="flex flex-wrap justify-center items-center container">
          <div className="w-1/4 py-5">
            <h1 className={`font-sans font-bold tracking-wide text-2xl text-blue-500 ${homeMode}`}>
              <Link to="/">DokterFavorit</Link>
            </h1>
          </div>
          <ul className="flex w-1/2 py-5">
            <li className="text-sm font-bold px-3">Home</li>
            <li className="text-sm font-bold px-3">Product</li>
            <li className="text-sm font-bold px-3">Pricing</li>
            <li className="text-sm font-bold px-3">Contact</li>
          </ul>
          <div className="py-5">
            <button className="bg-blue-500 p-3 font-bold text-white rounded-lg hover:bg-blue-200">
              <Link to="/login-register">Masuk/Daftar</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
