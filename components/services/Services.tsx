import React from "react";
import Image from "next/image";
import { serviceCards } from "@/app/data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="grid px-16 py-16 grid-cols-3 justify-center">
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
            <div className="flex items-center">
              <button className="text-[#84a17d]">Learn more</button>
              <ArrowRight className="text-[#84a17d]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
