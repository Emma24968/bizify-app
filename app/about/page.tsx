import { ChevronRight } from "lucide-react";
import React from "react";
import { cards, checks } from "../data";
import Image from "next/image";

export default function About() {
  return (
    <div className=" ">
      <section className="bg-green-800 w-full py-[150px] h-[500px] text-center">
        <h1 className="px-16 text-[70px] text-white font-bold">About Us</h1>
        <h3 className="px-16 flex justify-center">
          {" "}
          <span className="text-[#fffa]">Home</span>
          <ChevronRight className="text-white" />
          <span className="text-white">About Us</span>
        </h3>
      </section>
      <section>
        <div className="flex px-16 flex-col w-[60%] gap-15">
          <h3 className="text-5xl font-bold ">
            We are the top digital marketer Company
          </h3>
          <p>
            When an unknown printer took a galley of type and scrambled it ake a
            type specimen book. when an unknown printer took a galley of type
            and scrambled it type specimen book.
          </p>
          <div className="grid gap-3 grid-cols-2">
            {checks.map((check, index) => {
              return (
                <div key={index} className="flex gap-4  items-center">
                  <Image src={check.image} width={20} alt={check.description} />
                  <p className=" text-[15px] font-bold">{check.description}</p>
                </div>
              );
            })}
          </div>
          <button className="bg-[#84a17d] w-[10rem] rounded-lg py-3 px-2 text-white">
            More About Us{" "}
          </button>
        </div>
        <div className="px-16">
          {cards.map((card, index) => {
            return (
              <div className="relative">
                <Image src={card.image} alt="image" width={300} />
                <Image src={card.logo} alt="image" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
