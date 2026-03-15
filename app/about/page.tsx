"use client";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  MapPin,
  Star,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { About_checks, cards, checks, members } from "../data";
import About_icon from "@/public/About_icon.svg";
import anchor from "@/public/anchor.svg";
import hand from "@/public/hand.svg";
import vector from "@/public/Vector.svg";
import Team from "@/public/Team4.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className=" ">
      <section className="bg-[#153C3C] w-full py-[150px] h-[500px] text-center">
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
                  <div className="flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition duration-300 pb-4">
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">FB</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">TW</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">IG</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">YT</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-16 px-16 bg-[#153C3C]">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-5xl font-bold">
            What our clients
            <br /> say about us
          </h3>

          <button className="bg-[#84a17d] text-[15px] w-[10rem] rounded-lg py-3 px-2 text-white">
            View All Reviews
          </button>
        </div>
        <div className="flex justify-between text-white">
          <Image
            src={Team}
            alt="image"
            className="text-white w-[400px] h-[500px] rounded-2xl "
          />
          <div className="grid my-4">
            <Image src={vector} alt="vector icon" />
            <p>
              “He quickly delivered excellent design as per required <br />
              specifications. New landing page will have refreshing <br />{" "}
              simple look, while keeping page load light on images and <br /> at
              the same time keeping professional look. Finally, it also <br />{" "}
              seems very reasonable to implement responsive design,
              <br /> so I'm very happy with that.”
            </p>
            <hr />
            <div className="flex justify-between">
              <div className="">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      fill="#ECB014"
                      className="text-[#ECB014]"
                    />
                  ))}
                </div>

                <p className="font-semibold">Marvin McKinney</p>
                <p className="text-sm text-[#F4F5F6]">Lead Developer</p>
              </div>
              <div className="flex gap-1.5">
                <div className=" right-5 top-1/2 h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-green-800 rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowLeft />
                </div>
                <div className=" right-5 top-1/2  h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-green-800 rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-16 py-16">
        <div className="">
          <h3>
            Make something <br /> awesome.
          </h3>
          <p>
            Each demo built with Teba will look different. You can customize
            almost <br /> in the appearance of your website with only a few
            clicks. Each <br /> demo built with Teba will look different.
          </p>
          <div className="flex justify-between">
            <div className=" h-[48px] bg-black">
              <MapPin color="#ffffff" />
              <p>Address</p>
              <p>
                KDA Shiromoni I/A, Shiromoni,
                <br /> Khulna, Bangladesh
              </p>
            </div >
            <div className=" h-[48px] bg-black">
              <Mail color="#ffffff" />
              <p>Contact</p>
              <p>
                bizify@example.com <br />
                123-345-3456
              </p>
            </div>
          </div>
        </div>
        <div className="">

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          Fill The Contact Form
        </h2>

        <p className="text-gray-500 mb-10">
          Feel free to contact with us, we don't spam your email
        </p>
        <form className="space-y-8">

          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
          />

          <textarea
            placeholder="Write your message"
            rows={4}
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-green-500 py-2 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-md font-medium transition"
          >
            Send Message
          </button>

        </form>
      </div>

        </div>
      </section>
    </div>
  );
}
