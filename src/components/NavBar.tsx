import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown, FaCartFlatbed } from "react-icons/fa6";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="h-16 shadow-md shadow-blue-200 text-white flex font-san w-full border border-red-600">
        <div className="px-6 sm:px-10 md:px-20 xl:px-24">
            
        </div>
        {/* <div className="sm:px-20 flex items-center justify-between w-full">
          <div className="flex items-center space-x-6">
            <h1 className="font-bold hidden sm:block text-xl sm:text-2xl tracking-wide underline underline-offset-3 cursor-pointer">
              Zippyfy
            </h1>
            <div>
              <h1 className="text-gray-900 font-medium sm:text-lg">
                Delivery in{" "}
                <span className="text-2xl font-bold text-white">12 </span>
                Minutes
              </h1>
              <p className="text-xs flex items-center">
                Sifal-8, Kathmandu, Nepal{" "}
                <span className="pl-2 cursor-pointer">
                  <FaAngleDown />
                </span>
              </p>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Order Your Daily Essentials"
              className="px-4 py-2 sm:w-96 rounded-lg outline-none text-gray-900"
            />
          </div>

          <div className="flex items-center space-x-6">
            <p className="cursor-pointer">
              <FaRegUserCircle size={25} />
            </p>
            <p className="cursor-pointer bg-white p-2 rounded-lg text-emerald-700 flex items-center space-x-2">
              <FaCartFlatbed size={25} />
              <p className="font-semibold text-sm sm:text-base">My Cart</p>
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
