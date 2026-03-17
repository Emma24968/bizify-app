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
import Image from "next/image";
import About from "@/components/about/About";
import AboutIntro from "@/components/about/AboutIntro";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import AboutContact from "@/components/about/AboutContact";
import AboutCTA from "@/components/about/AboutCTA";

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
      <AboutTestimonial />
      <AboutContact />
      <AboutCTA />
    </div>
  );
}
