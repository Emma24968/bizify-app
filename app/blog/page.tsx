import React from "react";
import Image from "next/image";
import { blogpost } from "../data";
import { ArrowRight, Dot } from "lucide-react";
import PageHeader from "../PageHeader";
import CTA from "@/components/CTA";

export default function page() {
  return (
    <div className="">
        <PageHeader currentPage="BLOG" title="HOME" />
    <div className="grid grid-cols-3 py-16 px-16 justify-items-center">
      {blogpost.map((blog, index) => {
        return (
          <div key={index} className="w-[20rem] rounded pb-3">
            <Image src={blog.image} alt="" width={320} />
            <div className="bg-[#F4F5F6] p-4">
              <div className="flex items-center">
                <p className="text-[#3F4E50] font-light">Consulting</p>
                <Dot />
                <p className="text-[#3F4E50] font-light">10 May 2025</p>

              </div>
              <h3>{blog.title}</h3>
                            <div className="flex items-centergroup ">
                <button className="text-[#84a17d] cursor-pointer  text-[12px] gap-2 hover:text-black">
                  Learn more
                </button>
                <ArrowRight
                  size={20}
                  className="text-[#84a17d] cursor-pointer  hover:text-black"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <CTA />
    </div>
  );
}
