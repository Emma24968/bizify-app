import { SearchIcon } from "lucide-react";
import React from "react";

export default function Search() {
  return (
    <div className="bg-[#F4F5F6] rounded-2xl p-10 ">
      <h3>Search here</h3>
      <span className="flex">
        <input
          className=" bg-white p-4 rounded-l-[4px]"
          type="text"
          placeholder="search..."
        />
        <span className="bg-[#84A17D] rounded-r-[4px] flex p-0.5 justify-center">
          <SearchIcon color="white" />
        </span>
      </span>
    </div>
  );
}
