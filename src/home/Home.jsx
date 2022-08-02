import React from "react";
import cover from "../assets/landingpage/cover.png";
import Navbar from "./component/Navbar";
import { UsersIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className="h-screen mb-10"
      >
        <div className="">
          <Navbar />
          <div className="m-20 w-1/2">
            <h1 className="text-5xl text-white font-bold">
              Konsultasi Dokter Favoritmu disini
            </h1>
          </div>
          <div className="m-20 w-1/3">
            <h1>
              We know how large objects will act, but things on a small scale.
            </h1>
            <div>
              <button className="px-5 py-2 mx-2 my-1 rounded-full bg-blue-200 border-white border-2">
                Get Quote Now
              </button>
              <button className="px-5 py-2 mx-2 my-1 rounded-full bg-blue-200 border-white border-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Leading Medicine</h1>
          <span className="">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        <div className="flex flex-wrap">
          <div>
            <div className="bg-blue-200 w-64 mx-5 mt-5 p-3 rounded-t-lg">
              <UsersIcon className="h-16 w-16 rounded-full bg-white p-4" />
              <h1>Emergency Case</h1>
            </div>
            <div className="bg-white w-64 mx-5 p-3 rounded-t-lg border-blue-200 border-2">
              <ul>
                <li>- The best products start with Figma</li>
                <li>- Design with real data</li>
                <li>- Lightning fast prototyping</li>
                <li>- Fastest way to organize</li>
                <li>- Work at the speed of thought.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
