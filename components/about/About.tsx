import React from "react";
import Image from "next/image";
import { About_checks, cards } from "../../app/data";
import About_icon from "@/public/About_icon.svg";

export default function About() {
  return (
    <div>
      <section className="grid sm:grid-cols-2 gap-2 ">
        <div className="px-16">
          {cards.map((card, index) => {
            return (
              <div key={index} className="relative">
                <Image
                  src={card.image}
                  alt="image"
                  className="rounded-2xl w-[250px]"
                  // width={350}
                />
                <div className="bg-[#84A17D]  pl-2  gap-1.5 text-white py-2.5 content-between absolute bottom-10 rounded-r-full flex w-[180px]">
                  <Image src={About_icon} alt="image" className="w-[30px]" />
                  <p className="text-[15px] sm:text-[15px] ">
                    <span className="text-[12px] sm:text-[14px] ">99%</span>  Success
                    Rate
                  </p>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <div className="flex px-16 flex-col gap-6">
          <h3 className="text-[20px] sm:text-[30px] font-bold ">
            Cutting-edge solutions for finance
          </h3>
          <p className="text-[13px] sm:text-[16px]">
            The argument in favor of using filler text goes something like this
            If  you use real content in the design process, anytime you
            reach 
            review point you’ll end up reviewing.
          </p>
          <div className="grid gap-3">
            {About_checks.map((check, index) => {
              return (
                <div key={index} className="flex gap-4  items-center">
                  <Image src={check.image} width={15} alt={check.description} />
                  <p className=" text-[10px] sm:text-[12px] font-semibold">
                    {check.description}
                  </p>
                </div>
              );
            })}
          </div>
          <button className="bg-[#84a17d]  rounded-lg py-3 px-2 text-white">
            More About Us{" "}
          </button>
        </div>
      </section>
    </div>
  );
}
