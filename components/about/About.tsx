import React from "react";
import Image from "next/image";
import { About_checks, cards } from "../../app/data";
import About_icon from "@/public/About_icon.svg";

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div key={index} className="relative w-fit mx-auto">
                <Image
                  src={card.image}
                  alt="About"
                  width={350}
                  height={450}
                  className="rounded-2xl w-full max-w-[350px] h-auto object-cover"
                />
                <div className="absolute bottom-8 left-0 flex items-center gap-3 bg-[#84A17D] text-white py-3 px-4 rounded-r-full shadow-lg">
                  <Image
                    src={About_icon}
                    alt="Success Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-xl font-bold leading-none">99%</p>
                    <p className="text-sm mt-1">Success Rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight text-gray-900">
              Cutting-edge solutions for finance
            </h3>
            <p className="text-sm sm:text-base leading-7 text-gray-600">
              The argument in favor of using filler text goes something like
              this. If you use real content in the design process, anytime you
              reach a review point you'll end up reviewing and negotiating the
              content itself rather than evaluating the design.
            </p>
            <div className="space-y-4">
              {About_checks.map((check, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src={check.image}
                    alt={check.description}
                    width={20}
                    height={20}
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    {check.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button className="bg-[#84A17D] hover:bg-[#73916d] transition-colors text-white px-8 py-3 rounded-lg w-full sm:w-fit font-medium shadow-sm">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
