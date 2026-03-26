import React from "react";
import { serviceList } from "@/app/data";
import { ArrowUpRight } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex justify-center items-center ">

    <div className="w-[70%] justify-between rounded-2xl  bg-[#F4F4F4] h-[30rem] py-4 px-4 grid gap-3">
      <h3>Service List</h3>
      {serviceList.map((services, index) => {
        return (
          <div key={index} className="flex items-center gap-5">
  <button
    className={`${
      services.highlighted ? "bg-[#84A17D] text-white" : "bg-white" 
    } px-4 py-2 rounded-md flex gap-6 w-[18rem] justify-between`}
  >
    {services.name}
  <ArrowUpRight className={`${services.highlighted ? 'text-white':'text-black'}`}/>
  </button>

</div>
        );
      })}
      </div>
    </div>
  );
}
