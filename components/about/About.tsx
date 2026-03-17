import React from "react";
import Image from "next/image";
import { About_checks, cards } from "../../app/data";
import About_icon from "@/public/About_icon.svg";

export default function About() {
  return (
    <div>
      <section className="flex py-16 dark:bg-white dark:text-black">
        <div className="px-16">
          {cards.map((card, index) => {
            return (
              <div key={index} className="relative">
                <Image
                  src={card.image}
                  alt="image"
                  className="rounded-2xl"
                  width={350}
                />
                <div className="bg-[#84A17D] flex pl-2 gap-4 text-white py-3 content-between absolute bottom-10 rounded-r-full flex w-[200px]">
                  <Image src={About_icon} alt="image" className="" />
                  <p className="text-[14px] ">
                    <span className="text-[24px] ">99%</span> <br /> Success
                    Rate
                  </p>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <div className="flex px-16 flex-col w-[60%] gap-6">
          <h3 className="text-[54px] font-bold ">
            Cutting-edge solutions for finance{" "}
          </h3>
          <p>
            The argument in favor of using filler text goes something like this
            If <br /> you use real content in the design process, anytime you
            reach <br />
            review point you’ll end up reviewing.
          </p>
          <div className="grid gap-3">
            {About_checks.map((check, index) => {
              return (
                <div key={index} className="flex gap-4  items-center">
                  <Image src={check.image} width={20} alt={check.description} />
                  <p className=" text-[15px] font-semibold">
                    {check.description}
                  </p>
                </div>
              );
            })}
          </div>
          <button className="bg-[#84a17d] w-[10rem] rounded-lg py-3 px-2 text-white">
            More About Us{" "}
          </button>
        </div>
      </section>
    </div>
  );
}
