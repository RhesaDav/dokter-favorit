import React from "react";
import cover from "../assets/landingpage/cover.png";
import doctor1 from "../assets/landingpage/doctor1.png";
import doctor2 from "../assets/landingpage/doctor2.png";
import doctor3 from "../assets/landingpage/doctor3.png";
import Navbar from "./component/Navbar";
import {
  UsersIcon,
  StarIcon as StarIconOutline,
} from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="mb-10 relative">
      {/* <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className="h-screen mb-10"
      > */}
      <div>
        <img src={cover} alt="cover" className="h-screen w-full mb-10" />
      </div>
      <div className="h-screen absolute inset-x-0 top-0">
        <Navbar />
        <div className="m-20 w-1/2">
          <h1 className="text-5xl text-white font-bold opacity-100">
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
      {/* </div> */}
      {/* space  */}
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Leading Medicine</h1>
          <span className="">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        <div className="flex flex-wrap justify-around">
          <div>
            <div className="flex flex-wrap justify-center bg-blue-200 w-64 mx-5 mt-5 p-3 rounded-t-lg">
              <div>
                <UsersIcon className="h-16 w-16 rounded-full bg-white p-4 m-2" />
              </div>
              <div className="items-center">
                <h1>Emergency Case</h1>
              </div>
            </div>
            <div className="bg-white w-64 mx-5 p-3 rounded-t-lg border-blue-200 border-2">
              <ul>
                <li>- The best products start with Figma</li>
                <li>- Design with real data</li>
                <li>- Lightning fast prototyping</li>
                <li>- Fastest way to organize</li>
                <li>- Work at the speed of thought.</li>
              </ul>
              <span className="text-blue-500 font-bold">Learn More</span>
            </div>
          </div>
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
      {/* space */}
      <div className="m-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Leading Madicine</h1>
          <span>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
        <div className="flex flex-wrap justify-around m-10">
          <div className="border-gray-300 border-2 rounded w-80 h-64">
            <div className="flex m-8">
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconOutline className="h-7 w-7 text-yellow-500" />
            </div>
            <div className="m-5">
              <span>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="m-5">
              <img src={doctor1} alt="doctor1" className="w-10 h-10 rounded-full" />
            </div>
          </div>
          <div className="border-gray-300 border-2 rounded w-80 h-64">
            <div className="flex m-8">
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconOutline className="h-7 w-7 text-yellow-500" />
            </div>
            <div className="m-5">
              <span>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="m-5">
              <img src={doctor2} alt="doctor1" className="w-10 h-10 rounded-full" />
            </div>
          </div>
          <div className="border-gray-300 border-2 rounded w-80 h-64">
            <div className="flex m-8">
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconSolid className="h-7 w-7 text-yellow-500" />
              <StarIconOutline className="h-7 w-7 text-yellow-500" />
            </div>
            <div className="m-5">
              <span>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="m-5">
              <img src={doctor3} alt="doctor1" className="w-10 h-10 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
