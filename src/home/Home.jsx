import React from "react";
import cover from "../assets/landingpage/cover.png";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${cover})`
        }}
        className="h-screen"
      >
        <div className="saturate-100">
        <Navbar />
        <div className="container">
          <h1>Konsultasi Dokter Favoritmu disini</h1>
        </div>
        </div>
      </div>
    </div>
  );
}
