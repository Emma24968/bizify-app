import PageHeader from "@/app/PageHeader";
import React from "react";
import Image from "next/image";
import project1 from "@/public/project1.webp";
import project2 from "@/public/project2.webp";
import { portfolios } from "@/app/data";
import CTA from "@/components/CTA";

export default function page() {
  return (
    <div className="">
      <PageHeader title="Portfolio" currentPage="Portfolio" />
      <div className="grid grid-cols-2 gap-8 px-16 mt-10">
        <Image
          src={project1}
          alt="portfolio Image"
          className="w-full h-auto object-cover rounded-lg"
        />
        <Image
          src={project2}
          alt="portfolio Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 px-16 my-10">
        {portfolios.map((Portfolio, index) => {
          return (
            <div key={index}>
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
