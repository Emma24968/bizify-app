import PageHeader from "@/app/PageHeader";
import React from "react";
import Image from "next/image";
import project1 from "@/public/project1.webp";
import project2 from "@/public/project2.webp";
import { portfolios } from "@/app/data";
import CTA from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";

export default function page() {
  return (
    <div className="">
      <PageHeader title="Portfolio" currentPage="Portfolio" />
      <div className="grid grid-cols-2 gap-8 px-16 mt-10">
        <div className="relative group rounded-xl overflow-hidden">
          <Image
            src={project1}
            alt="portfolio Image"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-xs text-gray-300">Business Analysis</p>
            <h3 className="text-sm font-semibold">
              Market Research and Analysis.
            </h3>
          </div>

          <div className="absolute top-4 right-4 bg-[#84a17d] p-3 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
            <ArrowUpRight />
          </div>
        </div>
        <div className="relative group rounded-xl overflow-hidden">
          <Image
            src={project2}
            alt="portfolio Image"
            className="w-full h-auto object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-xs text-gray-300">Business Analysis</p>
            <h3 className="text-sm font-semibold">
              Market Research and Analysis.
            </h3>
          </div>

          <div className="absolute top-4 right-4 bg-[#84a17d] p-3 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300">
            <ArrowUpRight />
          </div>
        </div>
        {/* <div className="relative group rounded-xl">
          <div className="absolute bg-[#84a17d] p-6 items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 group-hover:bg-[#6f8c69] ">
            <ArrowUpRight />
          </div>
          <Image
            src={project2}
            alt="portfolio Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-6 px-16 my-10">
        {portfolios.map((Portfolio, index) => {
          return (
            <div key={index}>
              <div className="absolute bg-[#84a17d] p-6 items-center justify-center rounded-xl mt-[25%]  opacity-0 group-hover:opacity-100 group-hover:bg-[#6f8c69] ">
                <ArrowUpRight />
              </div>
              <Image
                src={Portfolio}
                alt="portfolio Image"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <CTA />
    </div>
  );
}
