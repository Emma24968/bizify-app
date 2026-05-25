'use client'
import React from "react";
import { serviceList,serviceCards } from "@/app/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Sidebar() {
  const param = useParams();
  const activeStatus=param.serviceid;
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[70%] justify-between rounded-2xl bg-[#F4F4F4] h-[30rem] py-4 px-4 grid gap-3">
        <h3 className="text-[25px]">Service List</h3>

        {serviceList.map((services, index) => {
          return (
            <div key={index} className="flex items-center gap-5">
              <Link href={`/services/${services.id}`}>
                <button
                  className={`${
                    services.highlighted
                      ? "bg-[#84A17D] text-white"
                      : "bg-white"
                  } px-4 py-2 rounded-md cursor-pointer flex gap-6 w-[18rem] justify-between`}
                >
                  {services.name}
                  <ArrowUpRight
                    className={`${
                      services.highlighted ? "text-white" : "text-black"
                    }`}
      <div className="w-[70%] justify-between rounded-2xl  bg-[#F4F4F4] h-[30rem] py-4 px-4 grid gap-3">
        <h3 className="text-[25px]">Service List</h3>
        {serviceCards.map((services, index) => {
const isActive=activeStatus?.toString().toLowerCase()===services.id.toLowerCase()
          return (
            <div key={index} className="flex items-center gap-5">
              <Link href={`/services/${services.id.toLowerCase()}`}>
                <button
                  className={`${
                    isActive
                      ? "bg-[#84A17D] text-white"
                      : "bg-white"
                  } px-4 py-2 rounded-md flex gap-6 w-[18rem] cursor-pointer justify-between`}
                >
                  {services.title}
                  <ArrowUpRight
                    className={`${isActive ? "text-white" : "text-black"}`}
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}