import React from "react";
import Image from "next/image";
import { blogpost } from "../data";
import { ArrowRight, Dot } from "lucide-react";

export default function page() {
  return (
    <div className="grid grid-cols-3">
      {blogpost.map((blog, index) => {
        return (
          <div key={index}>
            <Image src={blog.image} alt="" width={150} />
            <div>
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
  );
}
