import React from "react";
import { blogpost } from "@/app/data";
import Details from "@/components/blog/Details";
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
      
    </div>
    
  );
}
