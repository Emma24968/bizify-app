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
import vector from "@/public/Vector.svg";
import Team from "@/public/Team4.jpg";
import Image from "next/image";
import About from "@/components/about/About";
import AboutIntro from "@/components/about/AboutIntro";
import AboutTeam from "@/components/about/AboutTeam";

export default function AboutPage() {
  return (
    <div className=" ">
      <section className="bg-[#153C3C]  w-full py-[150px] h-[500px] text-center">
        <h1 className="px-16 text-[70px] text-white font-bold">About Us</h1>
        <h3 className="px-16 flex justify-center">
          {" "}
          <span className="text-[#fffa]">Home</span>
          <ChevronRight className="text-white" />
          <span className="text-white">About Us</span>
        </h3>
      </section>
      <About />
      <AboutIntro />
      <AboutTeam />
      <section className="py-16 px-16 bg-[#153C3C]">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-[54px] font-bold">
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
                <div className=" right-5 top-1/2 h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-[#84A17D] rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowLeft />
                </div>
                <div className=" right-5 top-1/2  h-[45px]  w-[45px] text-black hover:text-white bg-white hover:bg-[#84A17D] rounded-full flex items-center justify-center cursor-pointer">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-16 py-16 flex gap-20">
        <div className="grid">
          <h3 className="text-[54px] font-bold">
            Make something <br /> awesome.
          </h3>
          <p>
            Each demo built with Teba will look different. You can customize
            almost <br /> in the appearance of your website with only a few
            clicks. Each <br /> demo built with Teba will look different.
          </p>
          <div className="flex justify-between">
            <div>
              <div className="h-[48px] w-[48px] bg-black flex items-center justify-center rounded-[6px]">
                <MapPin color="#ffffff" className="w-[24p]" />
              </div>
              <p>Address</p>
              <p>
                KDA Shiromoni I/A, Shiromoni,
                <br /> Khulna, Bangladesh
              </p>
            </div>
            <div>
              <div className="h-[48px] w-[48px] bg-black flex items-center justify-center rounded-[6px]">
                <Mail color="#ffffff" className="w-[24p]" />
              </div>
              <p>Contact</p>
              <p>
                bizify@example.com <br />
                123-345-3456
              </p>
            </div>
          </div>
            <hr className="my-4"/>
            <p>Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#f4f5f6] p-[26px] rounded-2xl">
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
              className="w-full bg-[#84A17D] hover:bg-[#84A17D] text-white py-4 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="bg-[#84a17d] text-white text-center py-20 flex flex-col items-center justify-center gap-6">
        <h3 className="text-4xl font-bold">Let’s work together</h3>

        <p>
          Each demo built with Teba will look different. You can customize
          anything <br />
          about the appearance of your website with only a few clicks.
        </p>

        <button className="bg-white text-black rounded-lg py-3 px-6 font-medium hover:bg-gray-200 transition">
          Let's Start a Project
        </button>
      </section>{" "}
    </div>
  );
}
