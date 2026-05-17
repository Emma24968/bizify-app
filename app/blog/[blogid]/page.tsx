import React from "react";
import { blogpost } from "@/app/data";
import Details from "@/components/blog/Details";
import Search from "@/components/blog/Search";
import ServiceList from "@/components/blog/ServiceList";

export default function Blogdetails({
  params,
}: {
  params: { blogid: string };
}) {
  return (
    <div className="flex">
      <div className="">
        {" "}
        <Details />
      </div>
      <div className="flex flex-col gap-15">
        <Search />
        <ServiceList />
      </div>
    </div>
    
  );
}
