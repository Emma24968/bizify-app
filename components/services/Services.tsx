import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/app/data";
import { serviceList } from "@/app/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="grid px-16 py-16 grid-cols-3 justify-items-center">
      {serviceCards.map((service, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 mt-10 w-[306px] h-[350px] hover:shadow-2xl transition bg-[#f4f5f6] p-6 rounded-2xl"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={70}
              className=" hover:text-white p-2 rounded-[3px] bg-[#84a17d]"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link href={`/services/${service.id.toLowerCase()}`}>
              <div className="flex items-centergroup ">
                <button className="text-[#84a17d] cursor-pointer  text-[12px] gap-2 hover:text-black">
                  Learn more
                </button>
                <ArrowRight
                  size={20}
                  className="text-[#84a17d] cursor-pointer  hover:text-black"
                />
              </div>
            
            {/* 2. Wrap the button/arrow in a Link tag */}
            <Link 
              href={`/services/${service.id}`} 
              className="flex items-center group cursor-pointer"
            >
              <button className="text-[#84a17d] font-medium cursor-pointer">Learn more</button>
              <ArrowRight className="text-[#84a17d] ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
