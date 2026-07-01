import React from "react";
import Image from "next/image";
import group_profile from "@/public/group_profile.png";
import hero_image from "@/public/hero-image.jpg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 text-white w-full">
      <div className="bg-[#153C3C] flex flex-col justify-center px-6 md:px-10 lg:px-16 py-10 lg:py-15">
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-manrope">
          Get Digital <br />
          Products For <br />
          Business
        </h1>

        <p className="my-6 lg:my-10 text-sm md:text-base">
          Charts are the visual storytellers of your dashboard and admin
          template. They distill complex data into visuals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href="/services">
            <button className="cursor-pointer bg-[#84a17d] rounded-lg py-3 px-6 w-full sm:w-auto">
              Our Services
            </button>
          </Link>

          <Link href="/contact">
            <button className="cursor-pointer bg-white text-black rounded-lg py-3 px-6 w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="flex my-4 gap-3 items-center">
          <Image src={group_profile} alt="group profile" />
          <p className="text-sm md:text-base">
            more than 10k+ trusted customers
          </p>
        </div>
      </div>

      <div>
        <Image
          src={hero_image}
          alt="hero-image"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}