import React from "react";

export default function AboutCTA() {
  return (
    <div>
      <section className="bg-[#84a17d] text-white text-center py-20 flex flex-col items-center justify-center gap-6">
        <h3 className="text-[20px] md:text-3xl sm:text-2xl lg:text-4xl font-bold">
          Let’s work together
        </h3>

        <p className="text-[15px] sm:text-[18px] md:text-[18px] lg:text-[18px] px-4 md:px-[15rem] lg:px-[22rem] ">
          Each demo built with Teba will look different. You can customize
          anything about the appearance of your website with only a few clicks.
        </p>

        <button className="bg-white text-[12px] sm:text-[18px] md:text-[18px] lg:text-[18px] text-black rounded-lg py-3 sm:px-1.5 px-1.5 md:px-3 lg:px-6  hover:bg-gray-200 transition">
          Let's Start a Project
        </button>
      </section>
    </div>
  );
}
