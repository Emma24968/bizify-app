import { ChevronRight, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";
import { About_checks, cards, checks, members } from "../data";
import About_icon from "@/public/About_icon.svg";
import anchor from "@/public/anchor.svg";
import hand from "@/public/hand.svg";
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
      <section className="flex py-16">
        <div className="px-16">
          {cards.map((card, index) => {
            return (
              <div key={index} className="relative">
                <Image src={card.image} alt="image" width={300} />
                <div className="bg-green-900 flex pl-2 gap-4 text-white py-3 content-between absolute bottom-10 rounded-r-full flex w-[200px]">
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
        <div className="flex px-16 flex-col w-[60%] gap-15">
          <h3 className="text-5xl font-bold ">
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
      <section className="flex bg-[#F4F5F6] px-15">
        <div>
          {" "}
          <h3 className="text-5xl font-bold ">
            We are here to help solve your problems.{" "}
          </h3>
          <p>
            The argument in favor of using filler text goes something like this:{" "}
            <br /> If you use real content in the process, anytime you reach.
          </p>
          <div className="grid gap-4">
            <div className="flex gap-3">
              <Image
                src={anchor}
                alt="anchor icon"
                width={60}
                className="bg-green-800 p-2 rounded-[4px]"
              />
              <div className="">
                <p className="font-semibold text-[15px]">Project Processing</p>
                <p>
                  Group discussion first quarter teams viral business <br />{" "}
                  loremipsu adoption cob economy whist.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src={hand}
                alt="anchor icon"
                width={60}
                className="bg-green-800 p-2 rounded-[4px]"
              />
              <div className="">
                <p className="font-semibold text-[15px]">Financial Solutions</p>
                <p>
                  Group discussion first quarter teams viral business <br />{" "}
                  loremipsu adoption cob economy whist.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16">
          {cards.map((card, index) => {
            return (
              <div key={index} className="relative">
                <Image src={card.image} alt="image" width={300} />
              </div>
            );
          })}
        </div>{" "}
      </section>
      <section className="justify-items-center mb-[4rem]">
        <h3 className="text-5xl font-bold text-center my-15">
          Our team is always <br /> here for you
        </h3>
        <div className="flex gap-9 ">
          {members.map((team, index) => {
            return (
              <div key={index} className="rounded-lg group relative">

                <div className="text-center rounded-t-xl px-4 pt-4 rounded-b-xl bg-[#e3ebf3d4]">
                <Image
                  src={team.image}
                  alt={team.name}
                  className="rounded-t-xl"
                  width={220}
                />
                  <p className=" text-[15px] font-bold">{team.name}</p>
                  <p>{team.position}</p>
                  <div className="flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-white hover:bg-green-800 p-1 w-7 rounded-[2px] text-black hover:text-white text-[12px]">FB</div>
                    <div className="bg-white hover:bg-green-800 p-1 w-7 rounded-[2px] text-black hover:text-white text-[12px]">TW</div>
                    <div className="bg-white hover:bg-green-800 p-1 w-7 rounded-[2px] text-black hover:text-white text-[12px]">IG</div>
                    <div className="bg-white hover:bg-green-800 p-1 w-7 rounded-[2px] text-black hover:text-white text-[12px]">YT</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
