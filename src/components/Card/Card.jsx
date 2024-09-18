import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";



const stats = [
  {
    icon: <FaBox />,
    stat: "2+ billion",
    label: "parcels",
  },
  {
    icon: <FaLocationDot />,
    stat: "29000+",
    label: "pincodes",
  },
  {
    icon: <GiWorld />,
    stat: "97%",
    label: "Indian households covered",
  },
  {
    icon: <FaWarehouse />,
    stat: "30+",
    label: "hubs Across India",
  },
];

const StatsCard = () => {
  return (
    <>
      <div className="md:grid grid-cols-1 hidden lg:grid-cols-4 gap-4 p-10 my-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-80 h-44 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)] p-4"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <div className="text-2xl font-bold">{item.stat}</div>
            <div className="text-lg">{item.label}</div>
          </div>
        ))}
      </div>


      <div className="md:hidden flex flex-col my-6">
        <div className="flex justify-evenly items-center my-8">
          <div className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-36 h-44 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)] p-4">
              <div className="text-4lg mb-3"><FaBox /></div>
              <div className="text-lg">2+ billion</div>
              <div className="text-lg">Parcels</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-36 h-44 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)] p-4">
              <div className="text-4lg mb-3"><FaLocationDot /></div>
              <div className="text-lg">29000+</div>
              <div className="text-lg">Pincodes</div>
          </div>
        </div>
        <div className="flex justify-evenly items-center my-4">
          <div className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-36 h-44 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)] p-4">
              <div className="text-4lg mb-3"><GiWorld /></div>
              <div className="text-lg">97%</div>
              <div className="text-lg">Households</div>
              <div className="text-lg">Covered</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#2b0202] text-white w-36 h-44 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.6)] p-4">
              <div className="text-4xl mb-3"><FaWarehouse /></div>
              <div className="text-lg">30+</div>
              <div className="text-lg">Hubs</div>
              <div className="text-lg">Across India</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
